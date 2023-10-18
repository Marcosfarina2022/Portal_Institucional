import { IsNotEmpty } from "class-validator";
import { Column, Entity, PrimaryGeneratedColumn } from "typeorm";

@Entity({ name: "comentarios_galeria" })
export class ComentariosGaleria {
  @PrimaryGeneratedColumn()
  id: number;

  @Column()
  @IsNotEmpty()
  mensaje: string;

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
