import { Controller, Get } from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { getAppVersion } from '../../utils/package-json.utils';
import { Version } from './model/version.model';

@ApiTags('version')
@Controller('api/version')
export class VersionController {
  @Get()
  async getVersion(): Promise<Version> {
    const res = new Version({
      version: getAppVersion(),
    });
    return res;
  }
}
