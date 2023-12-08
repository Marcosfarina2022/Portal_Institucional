import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaController } from './galeria.controller';
import { Galeria } from './entities/galeria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categoria/entities/categoria.entity';
import { ComentariosGaleria } from 'src/comentarios_galeria/entities/comentarios_galeria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Galeria, Categoria, ComentariosGaleria])],
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}
