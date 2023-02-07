import { Controller, Get } from '@nestjs/common';
import { HealthInsuranceService } from './health-insurance.service';

@Controller('health-insurance')
export class HealthInsuranceController {
  constructor(private healthInsuranceService: HealthInsuranceService) {}

  @Get()
  async healthInsurances() {
    return await this.healthInsuranceService.findAll();
  }
}
