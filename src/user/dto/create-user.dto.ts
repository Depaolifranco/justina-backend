import { Prisma } from '@prisma/client';
import { IsNotEmpty, IsString, IsEmail } from 'class-validator';

export class CreateUserDto implements Prisma.UserCreateInput {
  @IsEmail()
  @IsNotEmpty()
  email: string;

  @IsString()
  @IsNotEmpty()
  password: string;
}
