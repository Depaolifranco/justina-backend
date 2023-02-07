import { Controller, Get } from '@nestjs/common';
import { HealthCenterService } from './health-center.service';

@Controller('health-center')
export class HealthCenterController {
  constructor(private healthCenterService: HealthCenterService) {}

  @Get()
  async healthcenters() {
    return await this.healthCenterService.findAll();
  }
}
