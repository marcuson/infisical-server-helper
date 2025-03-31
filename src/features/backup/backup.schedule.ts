import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { appConfig } from '../../app.config';
import { BackupService } from './backup.service';

@Injectable()
export class BackupSchedule {
  private readonly logger = new Logger(BackupSchedule.name);

  constructor(private backupSrv: BackupService) {}

  @Cron(appConfig.props.scheduleBackupCron || CronExpression.EVERY_YEAR, {
    disabled: !appConfig.props.scheduleBackupCron,
  })
  async backupCron(): Promise<void> {
    this.logger.log('Starting scheduled backup');

    const workspaceIds = appConfig.props.scheduleBackupWorkspaceIds;
    if (!workspaceIds) {
      this.logger.warn(
        'No workspace ids found to backup, did you set the SCHEDULE_BACKUP_WORKSPACE_IDS env var?',
      );
      return;
    }

    await this.backupSrv.backupWorkspaces(workspaceIds);
    this.logger.log('Scheduled backup finished');
  }
}
