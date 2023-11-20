import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { ComentariosGaleriaService } from './comentarios_galeria.service';
import { ComentariosGaleriaDto } from './dto/comentarios_galeria.dto';
import { ComentariosGaleria } from './entities/comentarios_galeria.entity';

@Controller('comentarios-galeria')
export class ComentariosGaleriaController {
  constructor(private readonly comentariosGaleriaService: ComentariosGaleriaService) {}

  @Post()
  create(@Body() createComentariosGaleriaDto: ComentariosGaleriaDto) {
    return this.comentariosGaleriaService.create(createComentariosGaleriaDto);
  }

  @Get('obtenerAll/:id')
  async buscarTodos(@Param('id') id: number):Promise<ComentariosGaleria[]> {
    return await this.comentariosGaleriaService.findCommentsByGaleriaId(id);
  }

  /*@Get('/:id')
  async buscarId(@Param('id') id: number):Promise<ComentariosGaleria> {
    return await this.comentariosGaleriaService.findOne(id);
  }*/

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateComentariosGaleriaDto: ComentariosGaleriaDto) {
    return this.comentariosGaleriaService.update(+id, updateComentariosGaleriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.comentariosGaleriaService.remove(+id);
  }
}
