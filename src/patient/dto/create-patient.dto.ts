import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString, IsEmail, IsInt, IsDate } from 'class-validator';

export class CreatePatientDto implements Prisma.PatientCreateInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  genreId: string;

  @IsString()
  @IsNotEmpty()
  maritalStatusId: string;

  @IsString()
  @IsNotEmpty()
  statusId: string;

  @IsString()
  @IsNotEmpty()
  documentTypeId: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsInt()
  @IsNotEmpty()
  documentNumber: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsDate()
  @IsNotEmpty()
  birthdate: string;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  phoneNumber: string;
}
