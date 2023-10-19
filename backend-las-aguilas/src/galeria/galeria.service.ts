import { Injectable } from '@nestjs/common';
import { GaleriaDto } from './dto/galeria.dto';

@Injectable()
export class GaleriaService {
  create(createGaleriaDto: GaleriaDto) {
    return 'This action adds a new galeria';
  }

  findAll() {
    return `This action returns all galeria`;
  }

  findOne(id: number) {
    return `This action returns a #${id} galeria`;
  }

  update(id: number, updateGaleriaDto: GaleriaDto) {
    return `This action updates a #${id} galeria`;
  }

  remove(id: number) {
    return `This action removes a #${id} galeria`;
  }
}
