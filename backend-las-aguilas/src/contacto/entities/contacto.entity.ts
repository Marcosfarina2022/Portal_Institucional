import { IsEmail, IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "contacto" })
export class Contacto {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  consulta: string;

  @Column()
  @IsNotEmpty()
  nombre: string;

  @Column()
  @IsNotEmpty()
  apellido: string;

  @Column()
  @IsEmail()
  correo_electronico: string;

  constructor(
    nombre: string,
    apellido: string,
    email: string,
    consulta: string,
  ) {
    this.nombre = nombre;
    this.apellido = apellido;
    this.correo_electronico = email;
    this.consulta = consulta;
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
  public getEmail(): string {
    return this.correo_electronico;
  }
  public setEmail(email: string): void {
    this.correo_electronico = email;
  }
  public getConsulta(): string {
    return this.consulta;
  }
  public setConsulta(consulta: string): void {
    this.consulta = consulta;
  }
}
