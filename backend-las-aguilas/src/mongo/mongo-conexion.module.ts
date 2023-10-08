import { Module } from '@nestjs/common';
import { MongoConexionService } from './mongo-conexion/mongo-conexion.service';

@Module({
  providers: [MongoConexionService
  ],
  exports: [
    MongoConexionService 
  ]
})
export class MongoConexionModule {}
