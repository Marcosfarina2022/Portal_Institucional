import { Controller, Get, Post, Body, Patch, Param, Delete, UseGuards, Req } from '@nestjs/common';
import { AuthService } from './auth.service';
import { RegisterDto } from './dto/registro.dto';
import { LoginDto } from './dto/login.dto';
import { AuthGuard } from './auth.guards';
import { Role } from 'src/common/enum/role.enum';

@Controller('auth')
export class AuthController {
  constructor(private readonly authService: AuthService) {}

  @Post('register')
  register(@Body() registerDto:RegisterDto){
    return this.authService.register(registerDto)
  }

  @Post('login')
  login(@Body() loginDto:LoginDto){
    return this.authService.login(loginDto)
  }

  @Get('home')
  @UseGuards(AuthGuard)
  getHome(@Req() request){
    if(request.user.role !== Role.ADMIN)
      return "no tienes los permisos suficientes para poder acceder a esta informacion";
    if(request.user.role === Role.ADMIN)
      return request.user ;
    return "no deberias poder ver esto";

  }
}
