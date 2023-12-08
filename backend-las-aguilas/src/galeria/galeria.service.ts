import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { GaleriaDto } from './dto/galeria.dto';
import { Galeria } from './entities/galeria.entity';
import { Repository, FindOneOptions } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';

@Injectable()
export class GaleriaService {
  private imagenes: Galeria[] = [];

  constructor(@InjectRepository(Galeria)
  private galeriaRepository: Repository<Galeria>) {

  }

  async create(createGaleriaDto: GaleriaDto): Promise<boolean> {
    try{
    let imagen : Galeria = await this.galeriaRepository.save(new Galeria(createGaleriaDto.img_nombre, createGaleriaDto.url));    
    if(imagen)
               return true;
           else
               throw new Error('No se pudo cargar la Foto');
        }
        catch(error){
            throw new HttpException({
                status: HttpStatus.NOT_FOUND,
                error: 'Error con la foto - ' + error
            },HttpStatus.NOT_FOUND)
        }
      }


  public async findAll(): Promise<GaleriaDto[]> {
    return await this.galeriaRepository.find();
  }

  async findOne(id: number) {
    const criterio: FindOneOptions = { where: { id: id } };
    let foto: Galeria = await this.galeriaRepository.findOne(criterio);
    if (foto)
      return foto;
    else
      return null;
  }

  update(id: number, updateGaleriaDto: GaleriaDto) {
    return `This action updates a #${id} galeria`;
  }

  remove(id: number) {
    return `This action removes a #${id} galeria`;
  }
}
