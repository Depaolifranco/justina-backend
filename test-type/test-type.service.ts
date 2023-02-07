import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class TestTypeService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.testType.findMany();
  }
}
