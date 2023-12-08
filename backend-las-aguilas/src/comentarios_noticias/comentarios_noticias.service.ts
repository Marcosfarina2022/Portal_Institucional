import { Injectable } from '@nestjs/common';
import { ComentariosNoticiaDto } from './dto/comentarios_noticia.dto';
import { ComentariosNoticia } from './entities/comentarios_noticia.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';

@Injectable()
export class ComentariosNoticiasService {
  private comentarios: ComentariosNoticia[] = [];

  /*constructor(
    @InjectRepository(ComentariosNoticia)
    private readonly comentarioRepositorio: Repository
  )
  */
  create(createComentariosNoticiaDto: ComentariosNoticiaDto) {
    return 'This action adds a new comentariosNoticia';
  }

  findAll() {
    return `This action returns all comentariosNoticias`;
  }

  findOne(id: number) {
    return `This action returns a #${id} comentariosNoticia`;
  }

  update(id: number, updateComentariosNoticiaDto: ComentariosNoticiaDto) {
    return `This action updates a #${id} comentariosNoticia`;
  }

  remove(id: number) {
    return `This action removes a #${id} comentariosNoticia`;
  }
}
