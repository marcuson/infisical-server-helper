import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BackupService } from './backup.service';

@ApiTags('backup')
@Controller('api/backup')
export class BackupController {
  constructor(private backupSrv: BackupService) {}

  @Post()
  async backup(opts: { workspaceIds: string[] }) {
    return await this.backupSrv.backupWorkspaces(opts.workspaceIds);
  }
}
