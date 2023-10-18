import { Noticia } from './entities/noticia.entity';
import { Module } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiasController } from './noticias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Noticia, Categoria])],
  controllers: [NoticiasController],
  providers: [NoticiasService],
})
export class NoticiasModule {}
