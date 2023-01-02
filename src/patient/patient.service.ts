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
    const data = {
      name: patient.name,
      lastname: patient.lastname,
      documentNumber: patient.documentNumber,
      address: patient.address,
      age: patient.age,
      email: patient.email,
      phoneNumber: patient.phoneNumber,
    };
    return this.dbService.patient.create({
      data,
    });
  }
}
