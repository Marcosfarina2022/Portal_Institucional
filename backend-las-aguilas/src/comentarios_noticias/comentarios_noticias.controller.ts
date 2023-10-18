import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentariosNoticiasService } from './comentarios_noticias.service';
import { ComentariosNoticiaDto } from './dto/comentarios_noticia.dto';

@Controller('comentarios-noticias')
export class ComentariosNoticiasController {
  constructor(private readonly comentariosNoticiasService: ComentariosNoticiasService) {}

  @Post()
  create(@Body() createComentariosNoticiaDto: ComentariosNoticiaDto) {
    return this.comentariosNoticiasService.create(createComentariosNoticiaDto);
  }

  @Get()
  findAll() {
    return this.comentariosNoticiasService.findAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.comentariosNoticiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComentariosNoticiaDto: ComentariosNoticiaDto) {
    return this.comentariosNoticiasService.update(+id, updateComentariosNoticiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentariosNoticiasService.remove(+id);
  }
}
