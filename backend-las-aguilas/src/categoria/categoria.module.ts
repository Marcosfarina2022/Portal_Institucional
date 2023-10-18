import { Module } from '@nestjs/common';
import { CategoriaService } from './categoria.service';
import { CategoriaController } from './categoria.controller';
import { Categoria } from './entities/categoria.entity';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Noticia } from 'src/noticias/entities/noticia.entity';
import { Galeria } from 'src/galeria/entities/galeria.entity';

@Module({
  imports: [TypeOrmModule.forFeature([Categoria, Galeria, Noticia])],
  controllers: [CategoriaController],
  providers: [CategoriaService],
})
export class CategoriaModule {}
