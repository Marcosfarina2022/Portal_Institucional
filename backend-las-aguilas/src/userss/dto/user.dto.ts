import { Role } from "src/common/enum/role.enum";

export class UserDto1 {
    readonly email:string;
    readonly date:Date; 
    readonly password:string;
    readonly username?:string;
    readonly role?:Role;
}
