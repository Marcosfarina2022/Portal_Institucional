import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { ComentariosGaleria } from "src/comentarios_galeria/entities/comentarios_galeria.entity";
import {
  Column,
  Entity,
  ManyToOne,
  OneToMany,
  PrimaryColumn,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "galeria" })
export class Galeria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  nombre: string;

  @ManyToOne(() => Categoria, (categoria) => categoria.galeria)
  categoria: Categoria;

  @OneToMany(() => ComentariosGaleria, (comentarios) => comentarios.galeria)
  comentarios: ComentariosGaleria[];


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
