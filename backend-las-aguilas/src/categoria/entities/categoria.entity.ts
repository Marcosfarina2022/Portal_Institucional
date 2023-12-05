import { IsNotEmpty } from "class-validator";
import { Galeria } from "src/galeria/entities/galeria.entity";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "categoria" })
export class Categoria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  nombre: string;

  /* se va a implementar a futuro

  @OneToMany(() => Galeria, (galeria) => galeria.categoria)
  galeria: Galeria[];
  
  */

  @OneToMany(() => Noticia, (noticias) => noticias.categoria)
  noticias: Noticia[];

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
