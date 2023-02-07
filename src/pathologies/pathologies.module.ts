import { Module } from '@nestjs/common';
import { PathologiesService } from './pathologies.service';
import { PathologiesController } from './pathologies.controller';

@Module({
  controllers: [PathologiesController],
  providers: [PathologiesService]
})
export class PathologiesModule {}
