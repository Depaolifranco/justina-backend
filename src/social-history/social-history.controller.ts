import { Controller, Get } from '@nestjs/common';
import { SocialHistoryService } from './social-history.service';

@Controller('social-history')
export class SocialHistoryController {
  constructor(private socialHistoryService: SocialHistoryService) {}

  @Get()
  async socialHistories() {
    return await this.socialHistoryService.findAll();
  }
}
