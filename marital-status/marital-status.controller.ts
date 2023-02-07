import { Controller, Get } from '@nestjs/common';
import { MaritalStatusService } from './marital-status.service';

@Controller('marital-status')
export class MaritalStatusController {
  constructor(private maritalStatusService: MaritalStatusService) {}

  @Get()
  async maritalStatus() {
    return await this.maritalStatusService.findAll();
  }
}
