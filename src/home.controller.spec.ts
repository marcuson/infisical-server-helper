import { Test, TestingModule } from '@nestjs/testing';
import { HomeController } from './home.controller';

describe('HomeController', () => {
  let controller: HomeController;

  beforeAll(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [HomeController],
    }).compile();

    controller = module.get(HomeController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });

  it('should start with name', async () => {
    const name = await controller.getVersion();
    expect(name).toMatch(/^Infisical Server Helper \(ISH\) v/);
  });
});
