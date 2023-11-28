import { Controller, Get, Post, Body, Patch, Param, Delete } from '@nestjs/common';
import { AuthService } from './auth.service';
import { LoginDto } from './dto/login.dto';
import { RegistroDto } from './dto/registro.dto';
import { Role } from 'src/common/enum/role.enum';


// AuthController.ts

@Controller('auth')
export class AuthController {
    constructor(private readonly authService: AuthService) {}

    @Post('registro')
  async registro(@Body() registroDto: RegistroDto) {
    const nuevoUsuario = await this.authService.registro(registroDto);
    return { mensaje: 'Usuario registrado exitosamente', usuario: nuevoUsuario };
  }
}
