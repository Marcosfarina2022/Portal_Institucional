import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "galeria" })
export class Galeria {
  @PrimaryGeneratedColumn()
  id: number;

  @PrimaryColumn()
  idCategoria: number;

  @Column()
  @IsNotEmpty()
  nombre: string;

  constructor(nombre: string) {
    this.nombre = nombre;
  }
  public getNombre(): string {
    return this.nombre;
  }
  public setNombre(nombre: string): void {
    this.nombre = nombre;
  }
  public getId(): number {
    return this.id;
  }
}
