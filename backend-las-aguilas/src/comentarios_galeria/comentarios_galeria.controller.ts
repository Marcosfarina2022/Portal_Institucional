import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentariosGaleriaService } from './comentarios_galeria.service';
import { ComentariosGaleriaDto } from './dto/comentarios_galeria.dto';

@Controller('comentarios-galeria')
export class ComentariosGaleriaController {
  constructor(private readonly comentariosGaleriaService: ComentariosGaleriaService) {}

  @Post()
  create(@Body() createComentariosGaleriaDto: ComentariosGaleriaDto) {
    return this.comentariosGaleriaService.create(createComentariosGaleriaDto);
  }

  @Get()
  findAll() {
    return this.comentariosGaleriaService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentariosGaleriaService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComentariosGaleriaDto: ComentariosGaleriaDto) {
    return this.comentariosGaleriaService.update(+id, updateComentariosGaleriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentariosGaleriaService.remove(+id);
  }
}
