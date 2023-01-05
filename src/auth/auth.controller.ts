import {
  Body,
  Controller,
  Get,
  HttpCode,
  Post,
  UseGuards,
  Request,
} from '@nestjs/common';
import { ApiTags } from '@nestjs/swagger';
import { AuthService } from './auth.service';
import { JwtAuthGuard } from './guards/jwt-auth.guard';

@ApiTags('Auth')
@Controller()
export class AuthController {
  constructor(private authService: AuthService) {}

  @HttpCode(200)
  @Post('auth/login')
  async login(@Body() req) {
    return await this.authService.login(req);
  }

  @HttpCode(200)
  @Post('send-verification-email')
  async sendVerificaationEmail(@Body() req) {
    await this.authService.sendVerificationEmail(req.email);
    return 'success';
  }

  @HttpCode(200)
  @Post('verify-code')
  async getFromCache(@Body() req) {
    return await this.authService.verifyCacheCode(req.email, req.code);
  }

  @UseGuards(JwtAuthGuard)
  @Get('profile')
  getProfile(@Request() req) {
    return req.user;
  }
}
