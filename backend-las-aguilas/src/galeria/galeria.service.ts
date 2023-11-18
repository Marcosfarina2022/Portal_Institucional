import { Injectable } from '@nestjs/common';
import { GaleriaDto } from './dto/galeria.dto';
import { Galeria } from './entities/galeria.entity';
import { Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GaleriaService {
  private imagenes: Galeria [] = [];  

  constructor(@InjectRepository(Galeria)
              private galeriaRepository:Repository<Galeria>){}          

  public async findAll(): Promise<GaleriaDto[]> {
    return await this.galeriaRepository.find();
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
