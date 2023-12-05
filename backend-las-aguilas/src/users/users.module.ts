import { Module } from '@nestjs/common';
import { UsersControllerController } from './users-controller/users-controller.controller';
import { UsersService } from './users-service/users.service';

@Module({
  controllers: [UsersControllerController],
  providers: [UsersService]
})
export class UsersModule {}
