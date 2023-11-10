import { Module } from '@nestjs/common';
import { UsuariosService } from './usuarios.service';
import { UsuariosController } from './usuarios.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Usuario } from './entities/usuario.entity';
import { ComentariosGaleria } from 'src/comentarios_galeria/entities/comentarios_galeria.entity';
import { ComentariosNoticia } from 'src/comentarios_noticias/entities/comentarios_noticia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Usuario, ComentariosGaleria, ComentariosNoticia])],
  controllers: [UsuariosController],
  providers: [UsuariosService],
})
export class UsuarioModule {}