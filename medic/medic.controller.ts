import { Controller, Get } from '@nestjs/common';
import { MedicService } from './medic.service';

@Controller('medic')
export class MedicController {
  constructor(private medicService: MedicService) {}

  @Get()
  async medics() {
    return await this.medicService.findAll();
  }
}
