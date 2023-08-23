import { Injectable } from "@nestjs/common";
import { RegistroDto } from "../auth-controller/registro.dto";
import { MongoConexionService } from "../../mongo/mongo-conexion/mongo-conexion.service"; // Ruta para el servicio de conexión
import { userSchema } from "../../models/user.model"; // Ruta para el modelo

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

      const connection = this.mongoConexionService.getConnection();
      const UserModel = connection.model("User", userSchema);

      const nuevoUsuario = await UserModel.create(nuevoUsuarioDto);

      return {
        Message: "Usuario creado con éxito",
        Usuario: nuevoUsuario,
      };
    } catch (error) {
      throw new Error("No se pudo realizar el registro: " + error.message);
    }
  }

  async obtenerUsuarios() {
    try {
      const connection = this.mongoConexionService.getConnection();
      const UserModel = connection.model("User", userSchema);

      const usuarios = await UserModel.find().exec();

      return usuarios;
    } catch (error) {
      throw new Error(
        "No se pudo obtener la lista de usuarios: " + error.message,
      );
    }
  }
  async ingresoUsuario(credentials: { email: string; password: string }) {
    try {
      const connection = this.mongoConexionService.getConnection();
      const UserModel = connection.model("User", userSchema);

      const usuario = await UserModel.findOne({
        email: credentials.email,
      }).exec();

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

      return {
        Message: "Ingreso exitoso",
        Usuario: usuario,
      };
    } catch (error) {
      throw new Error("No se pudo realizar el ingreso: " + error.message);
    }
  }
}
