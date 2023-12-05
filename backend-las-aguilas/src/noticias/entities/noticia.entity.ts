import { Categoria } from "src/categoria/entities/categoria.entity";
import { ComentariosNoticia } from "src/comentarios_noticias/entities/comentarios_noticia.entity";
import { Column, Entity, ManyToOne, OneToMany, PrimaryColumn, PrimaryGeneratedColumn } from "typeorm";

@Entity("noticias")
export class Noticia {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  titulo_noticia: string;

  @Column()
  descripcion_noticia: string;

  @Column()
  foto_noticia: string;

  @PrimaryColumn()
  categoriaId:number;

  @ManyToOne(() => Categoria, (categoria) => categoria.noticias)
  categoria: Categoria;

  @OneToMany(() => ComentariosNoticia, (comentariosNoticias) => comentariosNoticias.noticia)
  comentariosNoticias: ComentariosNoticia[];

  constructor(titulo: string, descripcion: string, foto: string) {
    this.titulo_noticia = titulo;
    this.descripcion_noticia = descripcion;
    this.foto_noticia = foto;
  }

  public getTitulo(): string {
    return this.titulo_noticia;
  }
  public setTitulo(titulo: string): void {
    this.titulo_noticia = titulo;
  }
  public getDescripcion(): string {
    return this.descripcion_noticia;
  }
  public setDescripcion(descripcion: string): void {
    this.descripcion_noticia = descripcion;
  }
  public getFoto(): string {
    return this.foto_noticia;
  }
  public setFoto(foto: string): void {
    this.foto_noticia = foto;
  }
}
