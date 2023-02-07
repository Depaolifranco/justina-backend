import { Controller, Get } from '@nestjs/common';
import { MedicalTestsService } from './medical-tests.service';

@Controller('medical-tests')
export class MedicalTestsController {
  constructor(private medicalTestsService: MedicalTestsService) {}

  @Get()
  async findAll() {
    return await this.medicalTestsService.findAll();
  }
}
