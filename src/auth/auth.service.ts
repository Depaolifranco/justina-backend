import {
  Injectable,
  UnauthorizedException,
  CACHE_MANAGER,
  Inject,
  UnprocessableEntityException,
  BadRequestException,
} from '@nestjs/common';
import { UserService } from '../user/user.service';
import { JwtService } from '@nestjs/jwt';
import { LoginDto } from './dto/login.dto';
import { comparePassword } from '../utils/bcrypt';
import { User } from '@prisma/client';
import { Cache } from 'cache-manager';

const FIVE_MINUTES_IN_SECONDS = 300;

@Injectable()
export class AuthService {
  constructor(
    @Inject(CACHE_MANAGER) private cacheManager: Cache,
    private userService: UserService,
    private jwtService: JwtService,
  ) {}

  async login(user: LoginDto) {
    const payload = await this.validateUser(user);
    delete payload.password;
    return {
      accessToken: this.jwtService.sign(payload),
    };
  }

  private async validateUser(userDto: LoginDto): Promise<User> {
    try {
      const user = await this.userService.findOne(userDto.email);
      const passwordComparissonResult = await comparePassword(
        userDto.password,
        user.password,
      );
      if (!user || !passwordComparissonResult) {
        throw new UnauthorizedException('User or email is incorrect');
      }
      return user;
    } catch (_) {
      throw new UnauthorizedException('User or email is incorrect');
    }
  }

  async sendVerificationEmail(email: string) {
    try {
      const user = await this.userService.findOne(email);
      if (user) {
        throw new UnauthorizedException('User already exist');
      }
      // TODO Se envía el token al email ingresado y se almacena en cache
      const code = this.generate6digitCode();
      await this.addToCache(email, code);
    } catch (e) {
      throw new UnprocessableEntityException(e.message);
    }
  }

  private async addToCache(key: string, item: number): Promise<void> {
    await this.cacheManager.set(key, item, FIVE_MINUTES_IN_SECONDS);
  }

  async verifyCacheCode(email: string, code: number) {
    const cacheCode = await this.getFromCache(email);
    if (cacheCode && cacheCode === code) {
      return;
    }
    throw new BadRequestException('Code is invalid');
  }

  private async getFromCache(key: string): Promise<number> {
    return await this.cacheManager.get(key);
  }

  private generate6digitCode(): number {
    return Math.floor(100000 + Math.random() * 900000);
  }
}
