import { IsNotEmpty, IsString } from 'class-validator';

export class CreateClinicHistoryDto {
  @IsString()
  @IsNotEmpty()
  patientId: string;

  @IsString()
  @IsNotEmpty()
  specialityId: string;

  @IsString()
  @IsNotEmpty()
  description: string;
}
