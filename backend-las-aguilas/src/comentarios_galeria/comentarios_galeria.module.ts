import { Module } from '@nestjs/common';
import { ComentariosGaleriaService } from './comentarios_galeria.service';
import { ComentariosGaleriaController } from './comentarios_galeria.controller';
import { ComentariosGaleria } from './entities/comentarios_galeria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { User } from 'src/users/entities/user.entity';
import { Galeria } from 'src/galeria/entities/galeria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([ComentariosGaleria, User, Galeria])],
  controllers: [ComentariosGaleriaController],
  providers: [ComentariosGaleriaService],
})
export class ComentariosGaleriaModule {}
