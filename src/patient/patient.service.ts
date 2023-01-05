import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Injectable()
export class PatientService {
  constructor(private dbService: PrismaService) {}

  async findAllPatients() {
    return this.dbService.patient.findMany();
  }

  async createPatient(patient: CreatePatientDto) {
    return this.dbService.patient.create({
      data: patient,
    });
  }
}
