import {
  Controller,
  HttpException,
  HttpStatus,
  Post,
  Body,
  Get,
} from '@nestjs/common';
import { AuthService } from '../auth-service/auth.service';
import { createReadStream, WriteStream } from 'fs';
import { join } from 'path';
import csvParser from 'csv-parser';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('registrarse')
  async registrarse(
    @Body()
    registroData: {
      nombre: string;
      apellido: string;
      email: string;
      password: string;
    },
  ) {
    try {
      // Llama al servicio de autenticación para manejar el registro
      this.authService.registrarse(registroData);

      return { message: 'Usuario registrado exitosamente' };
    } catch (error) {
      throw new HttpException(
        'No se pudo completar el registro',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get('registro') // Ruta para obtener el registro de usuarios
  async obtenerRegistroUsuarios() {
    try {
      // Lee un archivo CSV
      const csvFilePath = join(__dirname, '..', 'auth', 'registro.csv');
      const results = [];

      return new Promise((resolve, reject) => {
        createReadStream(csvFilePath)
          .pipe(csvParser())
          .on('data', (data) => results.push(data))
          .on('end', () => {
            resolve(results);
          })
          .on('error', (error) => {
            reject(error);
          });
      });
    } catch (error) {
      throw new HttpException(
        'No se pudo obtener el registro de usuarios',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }
  @Get('usuarios') // Nueva ruta para obtener usuarios desde el CSV
  async obtenerUsuarios() {
    try {
      // Lee un archivo CSV
      const csvFilePath = join(__dirname, 'registro.csv');
      const results = [];
      console.log(results);
      return new Promise((resolve, reject) => {
        createReadStream(csvFilePath)
          .pipe(csvParser())
          .on('data', (data) => results.push(data))
          .on('end', () => {
            resolve(results);
          })
          .on('error', (error) => {
            reject(error);
          });
      });
    } catch (error) {
      throw new HttpException(
        'No se pudo obtener la lista de usuarios',
        HttpStatus.INTERNAL_SERVER_ERROR,
      );
    }
  }

  @Post('ingresar')
  async ingresar(@Body() credentials: { email: string; password: string }) {
    try {
      const token = this.authService.ingresar(credentials);
      return `Ingreso exitoso ${token}`;
    } catch (error) {
      throw new HttpException(
        'Credenciales incorrectas',
        HttpStatus.UNAUTHORIZED,
      );
    }
  }
}
