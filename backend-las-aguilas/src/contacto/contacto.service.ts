import { Injectable } from '@nestjs/common';
import { ContactoDto } from './dto/contacto.dto';

@Injectable()
export class ContactoService {
  create(createContactoDto: ContactoDto) {
    return 'This action adds a new contacto';
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
