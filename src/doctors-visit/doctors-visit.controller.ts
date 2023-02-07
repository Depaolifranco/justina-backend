import { Controller, Get } from '@nestjs/common';
import { DoctorsVisitService } from './doctors-visit.service';

@Controller('doctors-visit')
export class DoctorsVisitController {
  constructor(private doctorsVisitService: DoctorsVisitService) {}

  @Get()
  async doctorsVisits() {
    return await this.doctorsVisitService.findAll();
  }
}
