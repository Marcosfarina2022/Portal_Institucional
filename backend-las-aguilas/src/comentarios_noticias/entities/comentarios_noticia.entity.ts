import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { Usuario } from "src/usuario/entities/usuario.entity";
import {
  Column,
  Entity,
  JoinColumn,
  ManyToOne,
  PrimaryGeneratedColumn,
} from "typeorm";

@Entity({ name: "comentarios_noticias" })
export class ComentariosNoticia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  mensaje: string;

  @ManyToOne(() => Noticia, (noticia) => noticia.comentariosNoticias)
  noticia: Noticia;

  @ManyToOne(() => Usuario, (usuario) => usuario.comentariosNoticia)
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
