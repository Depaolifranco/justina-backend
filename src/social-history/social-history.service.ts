import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SocialHistoryService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.socialHistory.findMany();
  }
}
