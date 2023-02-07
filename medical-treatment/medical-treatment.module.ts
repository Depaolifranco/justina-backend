import { Module } from '@nestjs/common';
import { MedicalTreatmentService } from './medical-treatment.service';
import { MedicalTreatmentController } from './medical-treatment.controller';

@Module({
  controllers: [MedicalTreatmentController],
  providers: [MedicalTreatmentService]
})
export class MedicalTreatmentModule {}
