import { Role } from "src/common/enum/role.enum";
import { Column, CreateDateColumn, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity()
export class Userss {

    @PrimaryGeneratedColumn()
    id:number;

    @Column({unique:true , nullable:false})
    username:string;

    @CreateDateColumn({nullable:false})
    date:Date;

    @Column({unique:true , nullable:false})
    email:string;

    @Column({nullable:false})
    password:string;

    @Column({type:'enum', default: Role.USER, enum:Role})
    role:Role;

    constructor(email:string,date:Date,password:string,username:string,role?:Role){
        this.email = email;
        this.date = date;
        this.password = password;
        this.username = username;
        this.role = role;
    }
}
