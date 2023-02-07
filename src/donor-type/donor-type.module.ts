import { Module } from '@nestjs/common';
import { DonorTypeService } from './donor-type.service';
import { DonorTypeController } from './donor-type.controller';

@Module({
  controllers: [DonorTypeController],
  providers: [DonorTypeService]
})
export class DonorTypeModule {}
