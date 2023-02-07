import { Controller, Get } from '@nestjs/common';
import { DonorTypeService } from './donor-type.service';

@Controller('donor-type')
export class DonorTypeController {
  constructor(private donorTypeService: DonorTypeService) {}

  @Get()
  async donorTypes() {
    return await this.donorTypeService.findAll();
  }
}
