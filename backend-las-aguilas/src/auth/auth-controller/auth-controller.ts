import { Controller, Post, Body, Get } from "@nestjs/common";
import { AuthService } from '../auth-service/auth.service';
import { RegistroDto } from './registro.dto';

@Controller("auth")
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post("registro")
  async registro_usuario(@Body() registroData: RegistroDto): Promise<any>  {
    console.log('Funciona?');
    return  this.authService.registrarUsuario(registroData);
  }
  @Get("registro-exitoso")
  registroExitoso(): string {
    return 'Registro exitoso. ¡Bienvenido!';
  }
  @Post("ingreso")
  async ingreso_usuario(@Body() credentials: { email: string; password: string }): Promise<any> {
    console.log('Funciona ingresar?');
    return  this.authService.ingresoUsuario(credentials);
  }

  @Get("obtener-usuarios")
  async obtenerUsuarios(): Promise<any> {
    console.log('Funciona obtener?');
    return  this.authService.obtenerUsuarios();
  }
}
