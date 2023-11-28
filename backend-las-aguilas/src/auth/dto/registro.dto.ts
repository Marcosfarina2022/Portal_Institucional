// RegistroDto.ts
import { IsEmail, IsNotEmpty, MinLength } from "class-validator";
import { Role } from "src/common/enum/role.enum";

export class RegistroDto {
    @IsNotEmpty()
    readonly nombre: string;

    @IsNotEmpty()
    readonly apellido: string;

    @IsEmail()
    readonly email: string;

    @IsNotEmpty()
    @MinLength(8)
    readonly password: string;

    readonly role: Role;
  rolId: number;
}
