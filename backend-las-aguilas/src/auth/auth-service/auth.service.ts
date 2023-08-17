import { Injectable } from '@nestjs/common';
import { createReadStream, createWriteStream, WriteStream } from 'fs';
import { join } from 'path';
import * as csvParser from 'csv-parser';

@Injectable()
export class AuthService {
  private readonly usuariosFilePath = join(__dirname, 'registro.csv');

  async registrarse(registroData: { nombre: string, apellido: string, email: string; password: string }) {
    const usuario = {
      nombre: registroData.nombre,
      apellido: registroData.apellido,
      email: registroData.email,
      password: registroData.password,
    };

    try {
      const stream = this.createWriteStream();
      const csvRow = `${usuario.nombre},${usuario.apellido},${usuario.email},${usuario.password}\n`;
      stream.write(csvRow);
      stream.end();
    } catch (error) {
      throw new Error('Error al registrar el usuario');
    }
  }

  private createWriteStream(): WriteStream {
    return createWriteStream(this.usuariosFilePath, { flags: 'a' });
  }

  async obtenerUsuarios(): Promise<any[]> {
    return new Promise((resolve, reject) => {
      const results = [];
      createReadStream(this.usuariosFilePath)
        .pipe(csvParser())
        .on('data', (data) => results.push(data))
        .on('end', () => {
          resolve(results);
        })
        .on('error', (error) => {
          reject(error);
        });
    });
  }

  async ingresar(credentials: { email: string; password: string }) {
    return new Promise((resolve, reject) => {
      const email = credentials.email;
      const password = credentials.password;

      createReadStream(this.usuariosFilePath)
        .pipe(csvParser())
        .on('data', (row) => {
          if (row.email === email && row.password === password) {
            resolve('Token de autenticación');
          }
        })
        .on('end', () => {
          reject('Credenciales incorrectas');
        });
    });
  }
}
