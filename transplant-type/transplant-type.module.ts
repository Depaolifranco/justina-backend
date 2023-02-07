import { Module } from '@nestjs/common';
import { TransplantTypeService } from './transplant-type.service';
import { TransplantTypeController } from './transplant-type.controller';

@Module({
  controllers: [TransplantTypeController],
  providers: [TransplantTypeService]
})
export class TransplantTypeModule {}
