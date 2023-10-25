import { Noticia } from './entities/noticia.entity';
import { Module } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiasController } from './noticias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { ComentariosNoticia } from 'src/comentarios_noticias/entities/comentarios_noticia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Noticia, Categoria, ComentariosNoticia])],
  controllers: [NoticiasController],
  providers: [NoticiasService],
})
export class NoticiasModule {}
