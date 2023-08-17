import { Test, TestingModule } from '@nestjs/testing';
import { ArticlesControllerController } from './articles-controller.controller';

describe('ArticlesControllerController', () => {
  let controller: ArticlesControllerController;

  beforeEach(async () => {
    const module: TestingModule = await Test.createTestingModule({
      controllers: [ArticlesControllerController],
    }).compile();

    controller = module.get<ArticlesControllerController>(ArticlesControllerController);
  });

  it('should be defined', () => {
    expect(controller).toBeDefined();
  });
});
