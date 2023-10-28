import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { ContactoDto } from './dto/contacto.dto';
import { InjectRepository } from '@nestjs/typeorm';
import { Contacto } from './entities/contacto.entity';
import { Repository } from 'typeorm';

@Injectable()
export class ContactoService {

  constructor(@InjectRepository(Contacto)
              private contactoRepository:Repository<Contacto>){} 
            
              

  async create(contactoDto: ContactoDto):Promise<ContactoDto>{ 
    try{
      let contacto:Contacto = await this.contactoRepository.save(new Contacto(contactoDto.consulta,contactoDto.nombre,contactoDto.apellido,contactoDto.correo_electronico));
      if(contacto)
         return contactoDto;
     else
         throw new Error('No se pudo crear la consulta');
  }
  catch(error){
      throw new HttpException({
          status: HttpStatus.NOT_FOUND,
          error: 'Error en contacto - ' + error
      },HttpStatus.NOT_FOUND)
  }
  }

  findAll() {
    return `This action returns all contacto`;
  }

  findOne(id: number) {
    return `This action returns a #${id} contacto`;
  }

  update(id: number, updateContactoDto: ContactoDto) {
    return `This action updates a #${id} contacto`;
  }

  remove(id: number) {
    return `This action removes a #${id} contacto`;
  }
}
