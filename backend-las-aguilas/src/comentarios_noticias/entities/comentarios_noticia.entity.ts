import { IsNotEmpty } from "class-validator";
import { Noticia } from "src/noticias/entities/noticia.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

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
  