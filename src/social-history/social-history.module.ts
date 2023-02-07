import { Module } from '@nestjs/common';
import { SocialHistoryService } from './social-history.service';
import { SocialHistoryController } from './social-history.controller';

@Module({
  controllers: [SocialHistoryController],
  providers: [SocialHistoryService]
})
export class SocialHistoryModule {}
