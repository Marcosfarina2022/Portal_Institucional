import { Module } from '@nestjs/common';
import { ArticlesControllerController } from '../articles-controller/articles-controller.controller';
import { ArticlesService } from './articles.service';

@Module({
  controllers: [ArticlesControllerController],
  providers: [ArticlesService]
})
export class ArticlesModule {}
