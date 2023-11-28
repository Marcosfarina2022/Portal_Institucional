import { IsEmail, IsNotEmpty, IsDate } from "class-validator";
import { ComentariosGaleria } from "src/comentarios_galeria/entities/comentarios_galeria.entity";
import { ComentariosNoticia } from "src/comentarios_noticias/entities/comentarios_noticia.entity";
import { Role } from "src/common/enum/role.enum";
import { Rol } from "src/rol/entities/rol.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "usuario" })
export class Usuario {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty({ message: "Nombre no puede estar vacío" })
  nombre: string;

  @Column()
  @IsNotEmpty({ message: "Apellido no puede estar vacío" })
  apellido: string;


  @Column({ unique: true, nullable: false })
  @IsEmail({}, { message: "Correo electrónico no es válido" })
  @IsNotEmpty({ message: "Correo electrónico no puede estar vacío" })
  email: string;
  
  @Column({ nullable: false })
  @IsNotEmpty({ message: "Contraseña no puede estar vacía" })
  password: string;
  
  @Column()
  @IsNotEmpty({ message: "Rol no puede estar vacío" })
  rolId: Role;

  @ManyToOne(() => Rol, (rol) => rol.usuarios, { nullable: false })
  rol: Role;

  @OneToMany(
    () => ComentariosGaleria,
    (comentariosGaleria) => comentariosGaleria.usuario
  )
  comentariosGaleria: ComentariosGaleria[];

  @OneToMany(
    () => ComentariosNoticia,
    (comentariosNoticia) => comentariosNoticia.usuario
  )
  comentariosNoticia: ComentariosNoticia[];

  constructor(
    nombre: string,
    apellido: string,
    email: string,
    password: string,
    rolId: Role
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.email = email;
    this.password = password;
    this.rolId = rolId;
  }
}