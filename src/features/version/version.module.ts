import { Module } from '@nestjs/common';
import { appConfig } from '../../app.config';
import { VersionController } from './version.controller';

@Module({
  imports: [],
  controllers: !appConfig.props.apiEnabled ? [] : [VersionController],
  providers: [],
  exports: [],
})
export class VersionModule {}
