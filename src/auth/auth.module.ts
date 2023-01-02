import { Module, CacheModule } from '@nestjs/common';
import { AuthService } from './auth.service';
import { JwtStrategy } from './strategies/jwt.strategy';
import { UserModule } from '../user/user.module';
import { PassportModule } from '@nestjs/passport';
import { JwtModule } from '@nestjs/jwt';
import { jwtConstants } from './constants';
import { AuthController } from './auth.controller';
import { UserService } from '../user/user.service';
import * as redisStore from 'cache-manager-redis-store';

@Module({
  imports: [
    UserModule,
    PassportModule,
    JwtModule.register({
      secret: jwtConstants.secret,
      signOptions: { expiresIn: '60s' },
    }),
    CacheModule.register({
      memory: redisStore,
      host: 'localhost',
      port: 6379,
      isGlobal: true,
    }),
  ],
  controllers: [AuthController],
  providers: [AuthService, JwtStrategy, UserService],
  exports: [AuthService],
})
export class AuthModule {}
