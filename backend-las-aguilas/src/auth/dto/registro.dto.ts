import { IsEmail, IsNotEmpty, IsString, MinLength } from "class-validator";
import { Role } from "src/common/enum/role.enum";


export class RegisterDto{
    
    @IsString()
    @IsNotEmpty()
    readonly username:string;

    @IsString()
    @IsNotEmpty()
    readonly surname:string;


    @IsNotEmpty()
    readonly date:Date;

    @IsString()
    @IsEmail()
    readonly email:string;

    @IsNotEmpty()
    @IsString()
    @MinLength(6)
    readonly password:string;

    readonly role:Role;
}