import { IsNotEmpty } from "class-validator";
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


  @Column()
  tipo: string;

  
  @OneToMany(() => User, (users) => users.rol)
  users: User[];


  constructor(tipo: string) {
    this.tipo = tipo;
  }

  public getTipo(): string {
    return this.tipo;
  }
  public setTipo(tipo: string): void {
    this.tipo = tipo;
  }
}
