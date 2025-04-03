import { Global, Module } from '@nestjs/common';
import { HealthchecksService } from './healthchecks.service';

@Module({
  imports: [],
  providers: [HealthchecksService],
  exports: [HealthchecksService],
  controllers: [],
})
@Global()
export class HealthchecksModule {}
