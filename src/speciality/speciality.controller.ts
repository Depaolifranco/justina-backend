import { Controller, Get } from '@nestjs/common';
import { SpecialityService } from './speciality.service';

@Controller('speciality')
export class SpecialityController {
  constructor(private specialityService: SpecialityService) {}

  @Get()
  async specialities() {
    return await this.specialityService.findAll();
  }
}
