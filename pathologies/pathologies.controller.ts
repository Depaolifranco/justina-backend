import { Controller, Get } from '@nestjs/common';
import { PathologiesService } from './pathologies.service';

@Controller('pathologies')
export class PathologiesController {
  constructor(private pathologiesService: PathologiesService) {}

  @Get()
  async pathologies() {
    return await this.pathologiesService.findAll();
  }
}
