import { Injectable } from '@nestjs/common';
import { NoticiaDto } from './dto/noticia.dto';
import { Noticia } from './entities/noticia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class NoticiasService {
  constructor(
    @InjectRepository(Noticia)
    private readonly noticiaRepository: Repository<Noticia>
  ) {}

  public async getAll(): Promise<NoticiaDto[]> {
    return await this.noticiaRepository.find();
  }

  findOne(id: number) {
    return `This action returns a #${id} noticia`;
  }

  update(id: number, updateNoticiaDto: NoticiaDto) {
    return `This action updates a #${id} noticia`;
  }

  remove(id: number) {
    return `This action removes a #${id} noticia`;
  }
}
