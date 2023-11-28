import { BadRequestException, Injectable, UnauthorizedException } from '@nestjs/common';
import { JwtService } from '@nestjs/jwt';
import { RegisterDto } from './dto/registro.dto';
import { Userss } from 'src/userss/entities/userss.entity';
import * as bcrypt from 'bcrypt';
import { LoginDto } from './dto/login.dto';
import { Users1Service } from 'src/userss/users.service';

@Injectable()
export class AuthService {

  constructor(private userService:Users1Service,
              private jwtService:JwtService){}

  async register(registerDto:RegisterDto){
    const user = await this.userService.findOneByEmail(registerDto.email)

    if(user){
      throw new BadRequestException('El usuario ya existe')
    }
    const pass_encryptada = await bcrypt.hash(registerDto.password,10)
    return await this.userService.create(new Userss(registerDto.email,registerDto.date,pass_encryptada,registerDto.username,registerDto.role))
    
  }
  
  async login({email,password}:LoginDto){
    const user = await this.userService.findOneByEmail(email);
    if(!user)
      throw new UnauthorizedException('usuario incorecto');//por lo general no se especifica en que se equivoco
  
    const isPasswordValid = await bcrypt.compare(password,user.password);  
    if(!isPasswordValid)
      throw new UnauthorizedException('password incorrecto');  
    //vincula el token al usuario
    const payload = {email:user.email,role: user.role, username: user.username} //mientras mas datos agrego mas tarda 
    
    const token = await this.jwtService.signAsync(payload);

    return token;
  }

}