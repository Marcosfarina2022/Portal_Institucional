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
  img_nombre: string;

  @Column()
  @IsNotEmpty()
  url: string;

 /* se va a implementar a futuro

 @ManyToOne(() => Categoria, (categoria) => categoria.galeria)
  categoria: Categoria;
  
  */

  
  @OneToMany(() => ComentariosGaleria, (comentarios) => comentarios.galeria)
  comentarios: ComentariosGaleria[];
  


  constructor(img_nombre: string, url:string) {
    this.img_nombre = img_nombre;
    this.url = url;
  }
  public getImg_Nombre(): string {
    return this.img_nombre;
  }
  public setImg_Nombre(img_nombre: string): void {
    this.img_nombre = img_nombre;
  }
  public getImg_url(): string {
    return this.url;
  }

  public setImg_url(nueva_url: string): void {
    this.url = nueva_url;
  }

  public getId(): number {
    return this.id;
  }
}
