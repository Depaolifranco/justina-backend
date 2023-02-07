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

  async showAll(
    page: number,
    itemPerPage: number,
    filter: object,
    sort: object,
  ) {
    // const { page, itemPerPage } = searchDto; searchDto: DtoSearchSegments

    const constructedWhere = this.createFilter(filter);
    const constructedOrderBy = this.createSort(sort);

    return this.dbService.clinicHistory.findMany({
      take: Number(itemPerPage),
      skip: page <= 0 ? 0 : Number(page) - 1,
      where: {
        patient: constructedWhere,
      },
      orderBy: {
        patient: constructedOrderBy,
      },
      include: {
        patient: true,
      },
    });
  }

  private createFilter(obj: object) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === '' || obj[key] === null) {
        delete obj[key];
      }
    });

    const constructedFilter = Object.entries(obj)
      .map(([k, v]) => ({
        [k]: { contains: v },
      }))
      .reduce((acc, curr) => {
        Object.keys(curr).forEach((k) => {
          acc[k] = curr[k];
        });
        return acc;
      }, {});

    return constructedFilter;
  }

  private createSort(obj: object) {
    Object.keys(obj).forEach((key) => {
      if (obj[key] === '' || obj[key] === null) {
        delete obj[key];
      }
    });

    return obj;
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
