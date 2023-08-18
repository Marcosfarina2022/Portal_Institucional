import { Controller, HttpException, HttpStatus, Post, Body, Get } from "@nestjs/common";
import { AuthService } from "../auth-service/auth.service";

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("ingresar")
  async ingreso_usuario(@Body() credentials: { email: string; password: string }) {
    try {
      const { token, role } = await this.authService.ingresoUsuario(credentials);
      return { message: "Ingreso exitoso", token, role };
    } catch (error) {
      throw new HttpException("Credenciales incorrectas", HttpStatus.UNAUTHORIZED);
    }
  }

  @Post("registrarse")
  async registro_usuario(@Body() registroData: { nombre: string; apellido: string; email: string; password: string }) {
    try {
      const result = await this.authService.registraroUsuario(registroData);
      return result; 
    } catch (error) {
      throw new HttpException("No se pudo completar el registro", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }

  @Get("obtener-usuarios")
  async obtenerUsuarios() {
    try {
      const users = await this.authService.obtenerUsuarios();
      return users; 
    } catch (error) {
      throw new HttpException("No se pudo obtener la lista de usuarios", HttpStatus.INTERNAL_SERVER_ERROR);
    }
  }
}
