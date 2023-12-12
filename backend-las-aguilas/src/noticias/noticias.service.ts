import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
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

  async create(noticiaDto: NoticiaDto): Promise<boolean> {
    try{
    let noticia : Noticia = await this.noticiaRepository.save(new Noticia(noticiaDto.titulo_noticia, noticiaDto.descripcion_noticia, noticiaDto.foto_noticia, noticiaDto.categoriaId));    
    if(noticia)
               return true;
           else
               throw new Error('No se pudo crear la noticia');
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Error en Noticia - ' + error
            },HttpStatus.NOT_FOUND)
        }
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
