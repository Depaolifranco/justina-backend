import { Controller, Get } from '@nestjs/common';
import { NephrologistTypeService } from './nephrologist-type.service';

@Controller('nephrologist-type')
export class NephrologistTypeController {
  constructor(private nephrologistTypeService: NephrologistTypeService) {}

  @Get()
  async nephrologistTypes() {
    return await this.nephrologistTypeService.findAll();
  }
}
