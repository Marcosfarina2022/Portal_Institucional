import { Module } from '@nestjs/common';
import { Users1Service } from './users.service';
import { TypeOrmModule } from '@nestjs/typeorm';
import { Userss } from './entities/userss.entity';



@Module({
  imports:[TypeOrmModule.forFeature([Userss])],
  controllers: [],
  providers: [Users1Service],
  exports: [Users1Service]
})
export class UsersModule {}