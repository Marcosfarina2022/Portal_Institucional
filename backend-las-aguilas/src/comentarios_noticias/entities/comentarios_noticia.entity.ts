import { IsNotEmpty } from "class-validator";
import { Categoria } from "src/categoria/entities/categoria.entity";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { User } from "src/users/entities/user.entity";
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

  @ManyToOne(() => User, (usuario) => usuario.comentariosNoticia)
  usuario: User;

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
