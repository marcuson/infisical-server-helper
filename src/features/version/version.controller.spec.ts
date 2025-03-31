import { Test, TestingModule } from '@nestjs/testing';
import { version } from '../../../package.json';
import { VersionController } from './version.controller';

describe('VersionController', () => {
  let controller: VersionController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [VersionController],
    }).compile();

    controller = module.get(VersionController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should get current version', async () => {
    const ver = await controller.getVersion();
    expect(ver.version).toBe(version);
  });
});
