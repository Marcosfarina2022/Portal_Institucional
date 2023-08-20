import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth-service/auth.service';
import { AuthController } from '../auth/auth-controller/auth-controller';
import { MongoConexionModule } from 'src/mongo/mongo-conexion.module';
@Module({
  imports: [MongoConexionModule], // Asegúrate de importar el módulo de conexión aquí
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
