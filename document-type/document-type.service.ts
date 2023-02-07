import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class DocumentTypeService {
  constructor(private dbService: PrismaService) {}

  async findAll() {
    return await this.dbService.documentType.findMany();
  }
}
