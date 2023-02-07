import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { PatientService } from './patient.service';
import { CreatePatientDto } from './dto/create-patient.dto';

@Controller('patient')
export class PatientController {
  constructor(private patientService: PatientService) {}

  @Get()
  findAll() {
    return this.patientService.findAllPatients();
  }

  @Post()
  create(@Body() body: CreatePatientDto) {
    return this.patientService.createPatient(body);
  }
}
