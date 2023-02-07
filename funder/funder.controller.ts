import { Controller, Get } from '@nestjs/common';
import { FunderService } from './funder.service';

@Controller('funder')
export class FunderController {
  constructor(private funderService: FunderService) {}

  @Get()
  async funders() {
    return await this.funderService.findAll();
  }
}
