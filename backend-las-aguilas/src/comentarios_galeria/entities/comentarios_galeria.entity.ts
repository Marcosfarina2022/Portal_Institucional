import { IsNotEmpty } from "class-validator";
import { Galeria } from "src/galeria/entities/galeria.entity";
import { User } from "src/users/entities/user.entity";
import { Column, Entity, ManyToOne, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "comentarios_galeria" })
export class ComentariosGaleria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  mensaje: string;

  @ManyToOne(() => Galeria, (galeria) => galeria.comentarios)
  galeria: Galeria;

  @ManyToOne(() => User, (usuario) => usuario.comentariosGaleria)
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
