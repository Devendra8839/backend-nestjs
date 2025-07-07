import {
  Body,
  Controller,
  Post,
  Req,
  UseGuards,
} from '@nestjs/common';
import { Request } from 'express';
import { AuthService } from './auth.service';
import { LocalAuthGuard } from './local-auth.guard';

// Extend Express Request interface to include 'user'
declare module 'express' {
  interface Request {
    user?: any;
  }
}

@Controller('auth')
export class AuthController {
  constructor(private authService: AuthService) {}

  @Post('signup')
  async signup(@Body() data: any) {
    return this.authService.signup(data);
  }

  @UseGuards(LocalAuthGuard)
  @Post('login')
  async login(@Req() req: Request) {
    return {
      message: 'Login successful',
      user: req.user,
    };
  }

  @Post('logout')
  logout(@Req() req: Request) {
    req.session.destroy(() => {});
    return { message: 'Logged out' };
  }

  @UseGuards(LocalAuthGuard)
  @Post('me')
  me(@Req() req: Request) {
    return req.user || null;
  }
}
