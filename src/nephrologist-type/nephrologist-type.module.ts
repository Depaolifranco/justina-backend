import { Module } from '@nestjs/common';
import { NephrologistTypeService } from './nephrologist-type.service';
import { NephrologistTypeController } from './nephrologist-type.controller';

@Module({
  controllers: [NephrologistTypeController],
  providers: [NephrologistTypeService]
})
export class NephrologistTypeModule {}
