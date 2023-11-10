import { Module } from '@nestjs/common';
import { ComentariosNoticiasService } from './comentarios_noticias.service';
import { ComentariosNoticiasController } from './comentarios_noticias.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { ComentariosNoticia } from './entities/comentarios_noticia.entity';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { Noticia } from 'src/noticias/entities/noticia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComentariosNoticia, Usuario, Noticia])],
  controllers: [ComentariosNoticiasController],
  providers: [ComentariosNoticiasService],
})
export class ComentariosNoticiasModule {}
