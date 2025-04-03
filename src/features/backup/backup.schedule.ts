import { Injectable, Logger } from '@nestjs/common';
import { Cron, CronExpression } from '@nestjs/schedule';
import { appConfig } from '../../app.config';
import { MeasuredHealthcheck } from '../healthchecks/healthchecks.decorators';
import { BackupService } from './backup.service';

@Injectable()
export class BackupSchedule {
  private readonly logger = new Logger(BackupSchedule.name);

  constructor(private backupSrv: BackupService) {}

  @Cron(appConfig.props.scheduleBackupCron || CronExpression.EVERY_YEAR, {
    disabled: !appConfig.props.scheduleBackupCron,
  })
  @MeasuredHealthcheck({
    enabled: !!appConfig.props.scheduleBackupHealthchecksUrl,
    url: appConfig.props.scheduleBackupHealthchecksUrl!,
  })
  async backupCron(): Promise<void> {
    this.logger.log('Starting scheduled backup');
    await this.backupSrv.scheduleBackupWorkspaces();
    this.logger.log('Scheduled backup finished');
  }
}
