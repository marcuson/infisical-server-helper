import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { InfisicalService } from '../infisical/infisical.service';
import { BackupService } from './backup.service';

@ApiTags('backup')
@Controller('api/backup')
export class BackupController {
  constructor(
    private backupSrv: BackupService,
    private inf: InfisicalService,
  ) {}

  @Post()
  async backup(opts: { workspaceIds: string[] }) {
    return await this.backupSrv.backupWorkspaces(opts.workspaceIds);
  }
}
