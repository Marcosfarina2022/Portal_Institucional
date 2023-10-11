import { Injectable } from "@nestjs/common";
import { RegistroDto } from "../auth-controller/registro.dto";
import { InjectRepository } from "@nestjs/typeorm";

@Injectable()
export class AuthService {
  constructor(
    @InjectRepository(User)
    private readonly userRepository: Repository<User>
  ) {}

  async registrarUsuario(registroData: RegistroDto) {
    try {
      const nuevoUsuario = this.userRepository.create({
        nombre: registroData.nombre,
        apellido: registroData.apellido,
        email: registroData.email,
        password: registroData.password,
      });

      await this.userRepository.save(nuevoUsuario);

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
      const usuarios = await this.userRepository.find();

      return usuarios;
    } catch (error) {
      throw new Error(
        "No se pudo obtener la lista de usuarios: " + error.message,
      );
    }
  }

  async ingresoUsuario(credentials: { email: string; password: string }) {
    try {
      const usuario = await this.userRepository.findOne({
        where: { email: credentials.email },
      });

      if (!usuario) {
        throw new Error("Usuario no encontrado");
      }

      if (usuario.password !== credentials.password) {
        throw new Error("Credenciales incorrectas");
      }

      return {
        Message: "Ingreso exitoso",
        Usuario: usuario,
      };
    } catch (error) {
      throw new Error("No se pudo realizar el ingreso: " + error.message);
    }
  }
}
