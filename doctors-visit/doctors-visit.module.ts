import { Module } from '@nestjs/common';
import { DoctorsVisitService } from './doctors-visit.service';
import { DoctorsVisitController } from './doctors-visit.controller';

@Module({
  controllers: [DoctorsVisitController],
  providers: [DoctorsVisitService]
})
export class DoctorsVisitModule {}
