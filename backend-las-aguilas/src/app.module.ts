import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { UsersModule } from './users/users.module';
import { AuthModule } from './auth/auth.module';
import { ArticlesModule } from './articles/articles-service/articles.module';
import { MongoConexionModule } from './mongo/mongo-conexion.module'; 
@Module({
  imports: [
    UsersModule,
    AuthModule,
    ArticlesModule,
    MongoConexionModule,
  ],
  controllers: [AppController],
  providers: [AppService],
})
export class AppModule {}
