import { IsEmail, IsNotEmpty } from "class-validator";
import { ComentariosGaleria } from "src/comentarios_galeria/entities/comentarios_galeria.entity";
import { ComentariosNoticia } from "src/comentarios_noticias/entities/comentarios_noticia.entity";
import { Rol } from "src/rol/entities/rol.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "usuario" })
export class User {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  nombre: string;

  @Column()
  @IsNotEmpty()
  apellido: string;

  @Column()
  fecha_nacimiento: Date;

  @Column()
  @IsEmail()
  email: string;

  @ManyToOne(() => Rol, (rol) => rol.users)
  rol: Rol;

  @OneToMany(
    () => ComentariosGaleria,
    (comentariosGaleria) => comentariosGaleria.usuario,
  )
  comentariosGaleria: ComentariosGaleria[];

  @OneToMany(
    () => ComentariosNoticia,
    (comentariosNoticia) => comentariosNoticia.usuario,
  )
  comentariosNoticia: ComentariosNoticia[];

  constructor(nombre: string, apellido: string, fecha: Date, email: string) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.fecha_nacimiento = fecha;
    this.email = email;
  }

  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  public getApellido(): string {
    return this.apellido;
  }
  public setApellido(apellido: string): void {
    this.apellido = apellido;
  }
  public getFechaNacimiento(): Date {
    return this.fecha_nacimiento;
  }
  public setFechaNacimiento(fechaNacimiento: Date): void {
    this.fecha_nacimiento = fechaNacimiento;
  }
  public getEmail(): string {
    return this.email;
  }
  public setEmail(email: string): void {
    this.email = email;
  }
}
