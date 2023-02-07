import {
  Controller,
  Get,
  Post,
  Body,
  Patch,
  Param,
  Delete,
} from '@nestjs/common';
import { ClinicHistoryService } from './clinic-history.service';
import { CreateClinicHistoryDto } from './dto/create-clinic-history.dto';
import { UpdateClinicHistoryDto } from './dto/update-clinic-history.dto';

@Controller('clinic-history')
export class ClinicHistoryController {
  constructor(private clinicHistoryService: ClinicHistoryService) {}

  @Post()
  create(@Body() createClinicHistoryDto: CreateClinicHistoryDto) {
    return this.clinicHistoryService.create(createClinicHistoryDto);
  }

  @Get()
  findAll() {
    return this.clinicHistoryService.findAll();
  }

  @Post('filter')
  async showAllClinicHistory(
    @Body('page') page: number,
    @Body('itemPerPage') itemPerPage: number,
    @Body('patient') patient: object,
    @Body('orderby') orderby: object,
  ) {
    return await this.clinicHistoryService.showAll(
      page,
      itemPerPage,
      patient,
      orderby,
    );
  }

  @Get(':id')
  findOne(@Param('id') id: string) {
    return this.clinicHistoryService.findOne(id);
  }

  @Patch(':id')
  update(
    @Param('id') id: string,
    @Body() updateClinicHistoryDto: UpdateClinicHistoryDto,
  ) {
    return this.clinicHistoryService.update(+id, updateClinicHistoryDto);
  }

  @Delete(':id')
  remove(@Param('id') id: string) {
    return this.clinicHistoryService.remove(+id);
  }
}
