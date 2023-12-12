import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { GaleriaService } from './galeria.service';
import { GaleriaDto } from './dto/galeria.dto';
import { Galeria } from './entities/galeria.entity';
import { Auth } from 'src/auth/entities/auth.entity';

@Controller('galeria')
export class GaleriaController {
  constructor(private readonly galeriaService: GaleriaService) {}

  @Post('crear')
  create(@Body() createGaleriaDto: GaleriaDto) {
    return this.galeriaService.create(createGaleriaDto);
  }

  @Get('fotos')
  async findAll(): Promise<GaleriaDto[]> {
    return await this.galeriaService.findAll();
  }

  @Get('obtener/:id')
  async buscarId(@Param('id') id: number):Promise<Galeria> {
    return await this.galeriaService.findOne(id);
  }

  @Patch(':id')
  update(@Param('id') id: string, @Body() updateGaleriaDto: GaleriaDto) {
    return this.galeriaService.update(+id, updateGaleriaDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.galeriaService.remove(+id);
  }
}
