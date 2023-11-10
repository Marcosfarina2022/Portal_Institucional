import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Galeria } from "src/galeria/entities/galeria.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import { Column, Entity, JoinColumn, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "comentarios_galeria" })
export class ComentariosGaleria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  mensaje: string;

  @ManyToOne(() => Galeria, (galeria) => galeria.comentarios)//relacion muchos a uno de comentarios_galeria a galeria(fotos)
  galeria: Galeria;

  @ManyToOne(() => Usuario, (usuario) => usuario.comentariosGaleria)
  usuario: Usuario;

  @ManyToOne(() => Categoria, { eager: true }) // Agrega la relación con la categoría
  @JoinColumn({ name: "categoriaId" }) // Define el nombre de la columna de la clave externa
  categoria: Categoria;
  
  constructor(mensaje: string) {
    this.mensaje = mensaje;
  }
  public getMensaje(): string {
    return this.mensaje;
  }
  public setMensaje(mensaje: string): void {
    this.mensaje = mensaje;
  }
  public getId(): number {
    return this.id;
  }
}
