import { Injectable } from '@nestjs/common';
import { PrismaService } from '../prisma/prisma.service';
import { CreateClinicHistoryDto } from './dto/create-clinic-history.dto';
import { UpdateClinicHistoryDto } from './dto/update-clinic-history.dto';

@Injectable()
export class ClinicHistoryService {
  constructor(private dbService: PrismaService) {}
  create(clinicHistory: CreateClinicHistoryDto) {
    return this.dbService.clinicHistory.create({
      data: {
        ...clinicHistory,
        timeDate: new Date(),
      },
    });
  }

  findAll() {
    return this.dbService.clinicHistory.findMany({
      include: {
        patient: true,
      },
    });
  }

  findOne(id: string) {
    return this.dbService.clinicHistory.findUnique({
      where: {
        id,
      },
      include: {
        patient: true,
      },
    });
  }

  update(id: number, updateClinicHistoryDto: UpdateClinicHistoryDto) {
    return `This action updates a #${id} clinicHistory`;
  }

  remove(id: number) {
    return `This action removes a #${id} clinicHistory`;
  }
}
