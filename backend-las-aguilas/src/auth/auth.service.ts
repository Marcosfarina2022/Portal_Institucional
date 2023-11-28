// auth.service.ts
import { Injectable, BadRequestException } from '@nestjs/common';
import { RegistroDto } from './dto/registro.dto';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import { InjectRepository } from '@nestjs/typeorm';
import { Repository } from 'typeorm';
import { validate } from 'class-validator';

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(Usuario) private userRepository: Repository<Usuario>,
  ) {}

  async registro(createAuthDto: RegistroDto): Promise<Usuario> {
    // Validar el DTO usando class-validator
    const errors = await validate(createAuthDto);
    if (errors.length > 0) {
      throw new BadRequestException(errors);
    }

    // Continuar con el proceso de registro
    const nuevoUsuario = this.userRepository.create(createAuthDto);
    return await this.userRepository.save(nuevoUsuario);
  }
}
