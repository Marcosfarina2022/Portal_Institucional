import { IsEmail, IsNotEmpty, isEmail } from "class-validator";
import { Rol } from "src/rol/entities/rol.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
