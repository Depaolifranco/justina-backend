import { Controller, Get } from '@nestjs/common';
import { TestTypeService } from './test-type.service';
@Controller('test-type')
export class TestTypeController {
  constructor(private testTypeService: TestTypeService) {}

  @Get()
  async findAll() {
    return await this.testTypeService.findAll();
  }
}
