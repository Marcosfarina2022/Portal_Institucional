import { Module } from '@nestjs/common';
import { ComentariosGaleriaService } from './comentarios_galeria.service';
import { ComentariosGaleriaController } from './comentarios_galeria.controller';
import { ComentariosGaleria } from './entities/comentarios_galeria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';

@Module({
  imports: [TypeOrmModule.forFeature([ComentariosGaleria])],
  controllers: [ComentariosGaleriaController],
  providers: [ComentariosGaleriaService],
})
export class ComentariosGaleriaModule {}
