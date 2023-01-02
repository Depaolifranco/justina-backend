import { Injectable } from '@nestjs/common';
import { encodePassword } from '../utils/bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return this.dbService.user.findMany();
  }

  async findOne(username: string): Promise<User | undefined> {
    return await this.dbService.user.findFirst({
      where: {
        email: username,
      },
    });
  }

  async createUser(user: CreateUserDto) {
    const password = await encodePassword(user.password);
    const data = { email: user.email, password };
    return this.dbService.user.create({
      data,
    });
  }

  async updateData(id: string, data: any) {
    return this.dbService.user.update({
      data,
      where: {
        id,
      },
    });
  }

  async deleteUser(id: string) {
    return this.dbService.user.delete({
      where: {
        id,
      },
    });
  }

  async deleteAll() {
    return this.dbService.user.deleteMany();
  }
}
