import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString, IsEmail, IsInt } from 'class-validator';

export class CreatePatientDto implements Prisma.PatientCreateInput {
  @IsString()
  @IsNotEmpty()
  name: string;

  @IsString()
  @IsNotEmpty()
  lastname: string;

  @IsInt()
  @IsNotEmpty()
  documentNumber: number;

  @IsString()
  @IsNotEmpty()
  address: string;

  @IsInt()
  @IsNotEmpty()
  age: number;

  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsInt()
  @IsNotEmpty()
  phoneNumber: number;
}
