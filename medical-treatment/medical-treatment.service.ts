import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';

@Injectable()
export class MedicalTreatmentService {
  constructor(private dbService: PrismaService) {}

  findAll() {
    return this.dbService.medicalTreatment.findMany();
  }
}
