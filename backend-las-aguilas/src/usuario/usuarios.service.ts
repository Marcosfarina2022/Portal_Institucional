import { HttpException, HttpStatus, Injectable } from '@nestjs/common';
import { UsuarioDto } from './dto/usuario.dto';
import { Usuario } from './entities/usuario.entity';
import { FindManyOptions, Repository } from 'typeorm';
import { InjectRepository } from '@nestjs/typeorm';
import { createRoot } from 'react-dom/client';

@Injectable()
export class UsuariosService {
  private usuarios: Usuario [] = [];

  constructor(
    @InjectRepository(Usuario)
    private readonly usuarioRepository: Repository<Usuario>
  ) {}

  public async createRoot(): Promise<UsuarioDto[]> {
    return await this.usuarioRepository.createRoot();
  }

  findOne(id: number) {
    return `This action returns a #${id} user`;
  }

  update(id: number, updateUserDto: UsuarioDto) {
    return `This action updates a #${id} user`;
  }

  remove(id: number) {
    return `This action removes a #${id} user`;
  }
}
