import { Module } from '@nestjs/common';
import { ComentariosNoticiasService } from './comentarios_noticias.service';
import { ComentariosNoticiasController } from './comentarios_noticias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosNoticia } from './entities/comentarios_noticia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComentariosNoticia])],
  controllers: [ComentariosNoticiasController],
  providers: [ComentariosNoticiasService],
})
export class ComentariosNoticiasModule {}
