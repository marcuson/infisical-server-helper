import { Injectable, Logger } from '@nestjs/common';
import { Archiver, ArchiverOptions, create } from 'archiver';
import { format } from 'date-fns';
import { createWriteStream, existsSync } from 'fs';
import { mkdir, readdir, stat, unlink } from 'fs/promises';
import { join } from 'path';
import { appConfig } from 'src/app.config';
import { InfisicalService } from '../infisical/infisical.service';

export interface BackupWorkspacesOptions {
  password: string;
  filename: string;
}

export interface BackupWorkspacesReturn {
  filename: string;
}

type ArchiverZipEncryptedOptions = ArchiverOptions & {
  encryptionMethod: 'aes256' | 'zip20';
  password: string;
};

@Injectable()
export class BackupService {
  private readonly logger = new Logger(BackupService.name);

  constructor(private inf: InfisicalService) {}

  getBackupDir(): string {
    return join(appConfig.props.dataDir, 'backup');
  }

  async backupWorkspaces(
    workspaceIds: string[],
    options?: Partial<BackupWorkspacesOptions>,
  ): Promise<BackupWorkspacesReturn> {
    const defaultOpts: BackupWorkspacesOptions = {
      password: appConfig.props.backupPassword,
      filename: format(new Date(), "yyyyMMdd-HHmmss'.zip'"),
    };
    const opts = Object.assign(defaultOpts, options);

    if (!existsSync(this.getBackupDir())) {
      await mkdir(this.getBackupDir(), { recursive: true });
    }

    const output = createWriteStream(join(this.getBackupDir(), opts.filename));
    const archive = create('zip-encrypted', {
      zlib: { level: 9 },
      encryptionMethod: 'aes256',
      password: opts.password,
    } as ArchiverZipEncryptedOptions);

    archive.pipe(output);

    for (const workspaceId of workspaceIds) {
      await this.backupWorkspace(workspaceId, archive);
    }

    await archive.finalize();

    await this.pruneOldBackups();

    return { filename: opts.filename } as BackupWorkspacesReturn;
  }

  private async backupWorkspace(
    workspaceId: string,
    archive: Archiver,
  ): Promise<void> {
    const workspace = await this.inf.getWorkspaceInfo({
      workspaceId,
    });

    archive.append(JSON.stringify(workspace, null, 2), {
      name: `${workspaceId}/workspace.data.json`,
    });

    const envs = workspace?.environments || [];
    const envPromises = [];
    for (const env of envs) {
      envPromises.push(
        this.inf.getAllSecretsFromWorkspaceAndEnv({
          workspaceId,
          envSlug: env.slug,
        }),
      );
    }

    const envSecretPaths = await Promise.all(envPromises);
    const envWithSecrets = envs.map((x, i) => ({
      env: x,
      paths: envSecretPaths[i],
    }));

    for (const env of envWithSecrets) {
      for (const path of env.paths) {
        archive.append(
          path.secrets.map((x) => x.name + '=' + x.value).join('\n'),
          { name: `${workspaceId}/${path.path}/${env.env.slug}.env` },
        );
      }
    }
  }

  private async pruneOldBackups(): Promise<void> {
    const backups = await readdir(this.getBackupDir());
    const maxBackupNum = appConfig.props.backupMaxNum;

    if (backups.length <= maxBackupNum) {
      return;
    }

    const statPromises = backups.map((x) => stat(join(this.getBackupDir(), x)));

    const stats = await Promise.all(statPromises);

    const backupFiles = stats
      .map((x, i) => {
        return {
          name: backups[i],
          stat: x,
        };
      })
      .sort((a, b) => a.stat.mtimeMs - b.stat.mtimeMs);

    const toDeleteBackups = backupFiles.slice(0, -maxBackupNum);

    const deletePromises = toDeleteBackups.map((x) =>
      unlink(join(this.getBackupDir(), x.name)),
    );
    const deleted = await Promise.all(deletePromises);

    this.logger.debug(`Pruned ${deleted.length} old backup files`);
  }
}
