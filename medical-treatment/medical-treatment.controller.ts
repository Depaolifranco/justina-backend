import { Controller, Get } from '@nestjs/common';
import { MedicalTreatmentService } from './medical-treatment.service';

@Controller('medical-treatment')
export class MedicalTreatmentController {
  constructor(private medicalTreatmentService: MedicalTreatmentService) {}

  @Get()
  async findAll() {
    return await this.medicalTreatmentService.findAll();
  }
}
