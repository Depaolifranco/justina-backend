import { Controller, Get } from '@nestjs/common';
import { MedicationService } from './medication.service';

@Controller('medication')
export class MedicationController {
  constructor(private medicationService: MedicationService) {}

  @Get()
  async findAll() {
    return await this.medicationService.findAll();
  }
}
