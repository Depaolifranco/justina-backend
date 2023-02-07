import { Controller, Get } from '@nestjs/common';
import { UserTypeService } from './user-type.service';

@Controller('user-type')
export class UserTypeController {
  constructor(private userTypeService: UserTypeService) {}

  @Get()
  async userTypes() {
    return await this.userTypeService.findAll();
  }
}
