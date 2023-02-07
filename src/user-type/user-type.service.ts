import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class UserTypeService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.userType.findMany();
  }
}
