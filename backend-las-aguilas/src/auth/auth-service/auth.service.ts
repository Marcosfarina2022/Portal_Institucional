import { Injectable } from '@nestjs/common';
import { RegistroDto } from '../auth-controller/registro.dto';
import { MongoConexionService } from '../../mongo/mongo-conexion/mongo-conexion.service'; // Asegúrate de usar la ruta correcta para el servicio de conexión
import { userSchema } from '../../models/user.model'; // Asegúrate de usar la ruta correcta para el modelo

@Injectable()
export class AuthService {
  constructor(private readonly mongoConexionService: MongoConexionService) {} // Inyecta el servicio de conexión

  async registrarUsuario(registroData: RegistroDto) {
    try {
      const nuevoUsuarioDto: RegistroDto = {
        nombre: registroData.nombre,
        apellido: registroData.apellido,
        email: registroData.email,
        password: registroData.password,
      };

      const connection = this.mongoConexionService.getConnection();
      const UserModel = connection.model('User', userSchema); 

      const nuevoUsuario = await UserModel.create(nuevoUsuarioDto);

      return {
        'Message': 'Usuario creado con éxito',
        'Usuario': nuevoUsuario,
      };
    } catch (error) {
      throw new Error('No se pudo realizar el registro: ' + error.message);
    }
  }

  async obtenerUsuarios() {
    return [];
  }

  async ingresoUsuario(credentials: { email: string; password: string }) {
    try {
      const response = await fetch('http://localhost:4000/auth/ingresar', {
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
}
