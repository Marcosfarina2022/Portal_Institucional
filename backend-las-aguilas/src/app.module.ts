import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { TypeOrmModule } from '@nestjs/typeorm'; // Importa TypeOrmModule
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
    TypeOrmModule.forRoot({
      type: 'mysql',
      host: 'localhost',
      port: 3306,
      username: 'root',
      password: '1234',
      database: 'Las_Aguilas',
      entities: ["dist/**/**.entity{.ts,.js}"],
      synchronize: false,
    }),
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
