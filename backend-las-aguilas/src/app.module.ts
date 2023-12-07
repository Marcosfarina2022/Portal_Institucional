import { Module } from '@nestjs/common';
import { TypeOrmModule } from '@nestjs/typeorm';
import { databaseConfig } from './config/database.config';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { RolModule } from './rol/rol.module';
import { NoticiasModule } from './noticias/noticias.module';
import { GaleriaModule } from './galeria/galeria.module';
import { CategoriaModule } from './categoria/categoria.module';
import { ContactoModule } from './contacto/contacto.module';
import { ComentariosNoticiasModule } from './comentarios_noticias/comentarios_noticias.module';
import { ComentariosGaleriaModule } from './comentarios_galeria/comentarios_galeria.module';
import { AuthModule } from './auth/auth.module';

@Module({
  imports: [
    TypeOrmModule.forRoot(databaseConfig),
    UsersModule,
    RolModule,
    NoticiasModule,
    GaleriaModule,
    CategoriaModule,
    ContactoModule,
    ComentariosNoticiasModule,
    ComentariosGaleriaModule,
    AuthModule
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
