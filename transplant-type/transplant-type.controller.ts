import { Controller, Get } from '@nestjs/common';
import { TransplantTypeService } from './transplant-type.service';

@Controller('transplant-type')
export class TransplantTypeController {
  constructor(private transplantTypeService: TransplantTypeService) {}

  @Get()
  async transplantTypes() {
    return await this.transplantTypeService.findAll();
  }
}
