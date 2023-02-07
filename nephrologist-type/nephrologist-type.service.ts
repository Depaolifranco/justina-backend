import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class NephrologistTypeService {
  constructor(private dbService: PrismaService) {}

  findAll() {
    return this.dbService.nephrologistType.findMany();
  }
}
