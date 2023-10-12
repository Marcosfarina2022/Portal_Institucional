import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { NoticiasService } from './noticias.service';
import { NoticiaDto } from './dto/noticia.dto';

@Controller('noticias')
export class NoticiasController {
  constructor(private readonly noticiasService: NoticiasService) {}

  

  @Get("todos")
  async findAll(): Promise<NoticiaDto[]> {
    return await this.noticiasService.getAll();
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.noticiasService.findOne(+id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateNoticiaDto:NoticiaDto) {
    return this.noticiasService.update(+id, updateNoticiaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.noticiasService.remove(+id);
  }
}
