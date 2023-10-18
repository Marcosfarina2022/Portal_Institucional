import { Module } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaController } from './galeria.controller';
import { Galeria } from './entities/galeria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Categoria } from 'src/categoria/entities/categoria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Galeria, Categoria])],
  controllers: [GaleriaController],
  providers: [GaleriaService],
})
export class GaleriaModule {}
