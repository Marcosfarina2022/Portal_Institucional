import { Injectable } from '@nestjs/common';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository, FindManyOptions } from 'typeorm';
import { ComentariosGaleria } from './entities/comentarios_galeria.entity';
import { ComentariosGaleriaDto } from './dto/comentarios_galeria.dto';

@Injectable()
export class ComentariosGaleriaService {

  private comentarios: ComentariosGaleria [] = [];  

  constructor(@InjectRepository(ComentariosGaleria)
              private comentariosGaleriaRepository:Repository<ComentariosGaleria>){}

  create(createComentariosGaleriaDto: ComentariosGaleriaDto) {
    return 'This action adds a new comentariosGaleria';
  }

  async findAll():Promise<ComentariosGaleria[]> {
    return await this.comentariosGaleriaRepository.find({relations:['galeria']});
  }

  async findCommentsByGaleriaId(galeriaId: number): Promise<ComentariosGaleria[]> {
    const criterio: FindManyOptions<ComentariosGaleria> = {
      where: { galeria: { id: galeriaId } }, // Ajusta según la columna y el nombre de la relación en tu entidad ComentariosGaleria
      relations: ['galeria'], // Incluye la relación para obtener la información de la galería asociada a los comentarios
    };
  
    try {
      const comentariosGaleria: ComentariosGaleria[] = await this.comentariosGaleriaRepository.find(criterio);
      return comentariosGaleria;
    } catch (error) {
      console.error('Error al recuperar comentarios de la galería:', error.message);
      return [];
    }
  }

  update(id: number, updateComentariosGaleriaDto: ComentariosGaleriaDto) {
    return `This action updates a #${id} comentariosGaleria`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentariosGaleria`;
  }
}
