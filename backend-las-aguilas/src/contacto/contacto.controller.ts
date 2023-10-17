import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ContactoService } from './contacto.service';
import { ContactoDto } from './dto/contacto.dto';

@Controller('contacto')
export class ContactoController {
  constructor(private readonly contactoService: ContactoService) {}

  @Post()
  create(@Body() createContactoDto: ContactoDto) {
    return this.contactoService.create(createContactoDto);
  }

  @Get()
  findAll() {
    return this.contactoService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.contactoService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateContactoDto: ContactoDto) {
    return this.contactoService.update(+id, updateContactoDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.contactoService.remove(+id);
  }
}
