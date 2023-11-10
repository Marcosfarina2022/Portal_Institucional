import { IsNotEmpty } from 'class-validator';
import { Role } from 'src/common/enum/role.enum';
import { Usuario } from 'src/usuario/entities/usuario.entity';
import {
  Column,
  Entity,
  OneToMany,
  PrimaryGeneratedColumn,
} from 'typeorm';

@Entity({ name: "rol" })
export class Rol {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ default: Role.USER }) // Cambia Role.USER a 'user'
  tipo: Role;

  @OneToMany(() => Usuario, (usuarios) => usuarios.rol)
  usuarios: Usuario[];

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
