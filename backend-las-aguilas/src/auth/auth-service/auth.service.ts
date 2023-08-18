import { Injectable } from '@nestjs/common';

@Injectable()
export class AuthService {
  private readonly registroEndPoint = '/auth/registrase';
  private readonly ingresoEndPoint = './auth/ingresar'; 
  private readonly obtenerUsuariosEndPoint = '/auth/obtener-usuarios';

  async registraroUsuario(registroData: { nombre: string, apellido: string, email: string, password: string }) {
    try {
      const usuario = {
        nombre: registroData.nombre,
        apellido: registroData.apellido,
        email: registroData.email,
        password: registroData.password,
        role: 'user',
      };

      const response = await fetch(this.registroEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(usuario),
      });

      if (!response.ok) {
        throw new Error('No se pudo completar el registro');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error(`No se pudo completar el registro: ${error.message}`);
    }
  }

  async ingresoUsuario(credentials: { email: string; password: string }) {
    try {
      const response = await fetch(this.ingresoEndPoint, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(credentials),
      });

      if (!response.ok) {
        throw new Error('Credenciales incorrectas');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('No se pudo realizar el ingreso: ' + error.message);
    }
  }

  async obtenerUsuarios() {
    try {
      const response = await fetch(this.obtenerUsuariosEndPoint);

      if (!response.ok) {
        throw new Error('No se pudo obtener la lista de usuarios');
      }

      const data = await response.json();
      return data;
    } catch (error) {
      throw new Error('No se pudo obtener la lista de usuarios: ' + error.message);
    }
  }
}
