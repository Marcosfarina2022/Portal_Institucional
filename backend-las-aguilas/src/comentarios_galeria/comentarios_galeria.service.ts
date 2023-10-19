import { Injectable } from '@nestjs/common';
import { ComentariosGaleriaDto } from './dto/comentarios_galeria.dto';

@Injectable()
export class ComentariosGaleriaService {
  create(createComentariosGaleriaDto: ComentariosGaleriaDto) {
    return 'This action adds a new comentariosGaleria';
  }

  findAll() {
    return `This action returns all comentariosGaleria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comentariosGaleria`;
  }

  update(id: number, updateComentariosGaleriaDto: ComentariosGaleriaDto) {
    return `This action updates a #${id} comentariosGaleria`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentariosGaleria`;
  }
}
