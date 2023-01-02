import { Module } from '@nestjs/common';
import { AppController } from './app.controller';
import { AppService } from './app.service';
import { AuthModule } from './auth/auth.module';
import { PrismaService } from './prisma/prisma.service';
import { UserService } from './user/user.service';
import { PrismaModule } from './prisma/prisma.module';
import { UserController } from './user/user.controller';
import { UserModule } from './user/user.module';
import { PatientModule } from './patient/patient.module';
import { PatientService } from './patient/patient.service';
import { AuthController } from './auth/auth.controller';

@Module({
  imports: [AuthModule, PrismaModule, UserModule, PatientModule],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, PrismaService, UserService, PatientService],
})
export class AppModule {}
