// registro.dto.ts
import { IsNotEmpty, IsEmail, MinLength } from 'class-validator';

export class RegistroDto {
  @IsNotEmpty()
  nombre: string;

  @IsNotEmpty()
  apellido: string;

  @IsNotEmpty()
  @IsEmail()
  email: string;

  @IsNotEmpty()
  @MinLength(6)
  password: string;
}
