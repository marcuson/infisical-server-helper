import { Controller, Post } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { BackupService } from './backup.service';

@ApiTags('backup')
@Controller('api/schedule/backup')
export class BackupScheduleController {
  constructor(private backupSrv: BackupService) {}

  @Post()
  async backup() {
    return await this.backupSrv.scheduleBackupWorkspaces();
  }
}
