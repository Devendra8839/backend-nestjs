import { Module } from '@nestjs/common';
import { AuthService } from './auth.service';
import { AuthController } from './auth.controller';
import { LocalStrategy } from './local.strategy';
import { LocalAuthGuard } from './local-auth.guard';

@Module({
  providers: [AuthService, LocalStrategy, LocalAuthGuard],
  controllers: [AuthController],
})
export class AuthModule {}
