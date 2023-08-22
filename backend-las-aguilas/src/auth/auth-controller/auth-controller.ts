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
import { RegistroDto } from './registro.dto';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  //post funcional

  @Post("registrarse")
  public registro_usuario(@Body() registroData: RegistroDto) : any {
    return this.authService.registraroUsuario(registroData);
  }

  @Get('registro')
  getRegistro():any{
      return this.authService.getRegistro();
  }
  

  
  @Get('registro2') // Ruta para obtener el registro de usuarios
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
