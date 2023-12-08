import { IsNotEmpty } from "class-validator";
import { Role } from "src/common/enum/role.enum";
import { User } from "src/users/entities/user.entity";
import {
  Column,
  Entity,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "rol" })
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;


  @Column({default:Role.USER})
  tipo: Role;

  
  @OneToMany(() => User, (users) => users.rol)
  users: User[];


  constructor(tipo: Role) {
    this.tipo = tipo;
  }

  public getTipo(): string {
    return this.tipo;
  }
  public setTipo(tipo: Role): void {
    this.tipo = tipo;
  }
}
