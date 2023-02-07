import { Injectable } from '@nestjs/common';
import { encodePassword } from '../utils/bcrypt';
import { PrismaService } from '../prisma/prisma.service';
import { CreateUserDto } from './dto/create-user.dto';
import { User } from '@prisma/client';

@Injectable()
export class UserService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    const users = await this.dbService.user.findMany();
    users.map((user) => {
      delete user.password;
    });

    return users;
  }

  async findOne(username: string): Promise<User | undefined> {
    const user = await this.dbService.user.findFirst({
      where: {
        email: username,
      },
    });
    return user;
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

  async changePassword(email: string, password: string) {
    const passwordHashed = await encodePassword(password);
    return this.dbService.user.update({
      data: {
        email,
        password: passwordHashed,
      },
      where: {
        email,
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
