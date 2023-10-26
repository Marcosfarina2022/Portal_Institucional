import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from "src/enum/role.enum";


export class RegisterDto{
    
    @IsString()
    @IsNotEmpty()
    readonly username:string;

    @IsString()
    @IsEmail()
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(8)
    readonly password:string;

    readonly role:Role;
}