import { Module } from '@nestjs/common';
import { InfisicalService } from './infisical.service';

@Module({
  imports: [],
  providers: [InfisicalService],
  exports: [InfisicalService],
  controllers: [],
})
export class InfisicalModule {}
