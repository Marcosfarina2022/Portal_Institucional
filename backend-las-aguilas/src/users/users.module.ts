import { Module } from '@nestjs/common';
import { UsersService } from './users.service';
import { UsersController } from './users.controller';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from './entities/user.entity';
import { ComentariosGaleria } from 'src/comentarios_galeria/entities/comentarios_galeria.entity';
import { ComentariosNoticia } from 'src/comentarios_noticias/entities/comentarios_noticia.entity';

@Module({
  imports: [TypeOrmModule.forFeature([User, ComentariosGaleria, ComentariosNoticia])],
  controllers: [UsersController],
  providers: [UsersService],
})
export class UsersModule {}