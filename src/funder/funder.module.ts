import { Module } from '@nestjs/common';
import { FunderService } from './funder.service';
import { FunderController } from './funder.controller';

@Module({
  controllers: [FunderController],
  providers: [FunderService]
})
export class FunderModule {}
