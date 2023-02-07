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
import { ClinicHistoryModule } from './clinic-history/clinic-history.module';
import { DocumentTypeModule } from './document-type/document-type.module';
import { GenreModule } from './genre/genre.module';
import { SocialHistoryModule } from './social-history/social-history.module';
import { DoctorsVisitModule } from './doctors-visit/doctors-visit.module';
import { HealthCenterModule } from './health-center/health-center.module';
import { FunderModule } from './funder/funder.module';
import { TransplantTypeModule } from './transplant-type/transplant-type.module';
import { HealthInsuranceModule } from './health-insurance/health-insurance.module';
import { MaritalStatusModule } from './marital-status/marital-status.module';
import { MedicModule } from './medic/medic.module';
import { NephrologistTypeModule } from './nephrologist-type/nephrologist-type.module';
import { SpecialityModule } from './speciality/speciality.module';
import { StatusModule } from './status/status.module';
import { UserTypeModule } from './user-type/user-type.module';
import { PathologiesModule } from './pathologies/pathologies.module';
import { MedicalTreatmentModule } from './medical-treatment/medical-treatment.module';
import { MedicationModule } from './medication/medication.module';
import { MedicalTestsModule } from './medical-tests/medical-tests.module';
import { DonorTypeModule } from './donor-type/donor-type.module';
import { TestTypeModule } from './test-type/test-type.module';

@Module({
  imports: [
    AuthModule,
    PrismaModule,
    UserModule,
    PatientModule,
    ClinicHistoryModule,
    DocumentTypeModule,
    GenreModule,
    SocialHistoryModule,
    DoctorsVisitModule,
    HealthCenterModule,
    FunderModule,
    TransplantTypeModule,
    HealthInsuranceModule,
    MaritalStatusModule,
    MedicModule,
    NephrologistTypeModule,
    SpecialityModule,
    StatusModule,
    UserTypeModule,
    PathologiesModule,
    MedicalTreatmentModule,
    MedicationModule,
    MedicalTestsModule,
    DonorTypeModule,
    TestTypeModule,
  ],
  controllers: [AppController, UserController, AuthController],
  providers: [AppService, PrismaService, UserService, PatientService],
})
export class AppModule {}
