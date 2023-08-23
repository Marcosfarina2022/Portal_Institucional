import { IsEmail, IsNotEmpty, MinLength } from 'class-validator';

export class RegistroDto {
  @IsNotEmpty({ message: 'El nombre es obligatorio' })
  nombre: string;

  @IsNotEmpty({ message: 'El apellido es obligatorio' })
  apellido: string;

  @IsEmail({}, { message: 'El email no es válido' })
  email: string;

  @MinLength(6, { message: 'La contraseña debe tener al menos 6 caracteres' })
  password: string;
}
