import { Module } from '@nestjs/common';
import { appConfig } from '../../app.config';
import { InfisicalModule } from '../infisical/infisical.module';
import { BackupController } from './backup.controller';
import { BackupSchedule } from './backup.schedule';
import { BackupScheduleController } from './backup.schedule.controller';
import { BackupService } from './backup.service';

const providers = [
  BackupService,
  appConfig.props.scheduleEnabled ? BackupSchedule : undefined,
].filter((x) => x !== undefined);

const controllers = [
  appConfig.props.apiEnabled ? BackupController : undefined,
  appConfig.props.apiEnabled ? BackupScheduleController : undefined,
].filter((x) => x !== undefined);

@Module({
  imports: [InfisicalModule],
  providers: providers,
  exports: [BackupService],
  controllers: controllers,
})
export class BackupModule {}
