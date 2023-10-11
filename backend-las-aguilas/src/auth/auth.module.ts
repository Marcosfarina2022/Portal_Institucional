import { Module } from '@nestjs/common';
import { AuthService } from '../auth/auth-service/auth.service';
import { AuthController } from '../auth/auth-controller/auth-controller';
import { UsersModule } from 'src/users/users.module';
@Module({
  imports: [UsersModule], 
  controllers: [AuthController],
  providers: [AuthService],
})
export class AuthModule {}
