import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class SpecialityService {
  constructor(private dbService: PrismaService) {}

  findAll() {
    return this.dbService.speciality.findMany();
  }
}
