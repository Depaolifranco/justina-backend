import { PrismaClient } from '@prisma/client';
import { documentType } from './seeds/document-type';
import { maritalStatus } from './seeds/marital-status';
import { nephrologistType } from './seeds/nephrologist-type';
import { genre } from './seeds/genre';
import { status } from './seeds/status';
import { transplantType } from './seeds/transplant-type';
import { user } from './seeds/user';
import { speciality } from './seeds/speciality';
import { userType } from './seeds/user-type';
import { clinicHistory } from './seeds/clinic-history';
import { doctorsVisit } from './seeds/doctors-visit';
import { donorType } from './seeds/donor-type';
import { funder } from './seeds/funder';
import { healthCenter } from './seeds/health-center';
import { healthInsurance } from './seeds/health-insurance';
import { medic } from './seeds/medic';
import { medicalTests } from './seeds/medical-tests';
import { medicalTreatment } from './seeds/medical-treatment';
import { medication } from './seeds/medication';
import { pathologies } from './seeds/pathologies';
import { patient } from './seeds/patient';
import { socialHistory } from './seeds/social-history';
import { testType } from './seeds/test-type';

const prisma = new PrismaClient();

async function main() {
  await prisma.medicalTreatment.deleteMany();
  await prisma.healthCenter.deleteMany();
  await prisma.genre.deleteMany();
  await prisma.documentType.deleteMany();
  await prisma.transplantType.deleteMany();
  await prisma.userType.deleteMany();
  await prisma.status.deleteMany();
  await prisma.maritalStatus.deleteMany();
  await prisma.medicalTests.deleteMany();
  await prisma.donorType.deleteMany();
  await prisma.medication.deleteMany();
  await prisma.testType.deleteMany();
  await prisma.user.deleteMany();
  await prisma.speciality.deleteMany();
  await prisma.clinicHistory.deleteMany();
  await prisma.doctorsVisit.deleteMany();
  await prisma.funder.deleteMany();
  await prisma.medic.deleteMany();
  await prisma.pathologies.deleteMany();
  await prisma.patient.deleteMany();
  await prisma.socialHistory.deleteMany();

  await prisma.genre.createMany({
    data: genre,
  });
  await prisma.documentType.createMany({
    data: documentType,
  });
  await prisma.transplantType.createMany({
    data: transplantType,
  });
  await prisma.userType.createMany({
    data: userType,
  });
  await prisma.status.createMany({
    data: status,
  });
  await prisma.maritalStatus.createMany({
    data: maritalStatus,
  });
  await prisma.donorType.createMany({
    data: donorType,
  });
  await prisma.medication.createMany({
    data: medication,
  });
  await prisma.testType.createMany({
    data: testType,
  });

  for (let i = 0; i < nephrologistType.length; i++) {
    await prisma.nephrologistType.upsert(nephrologistType[i]);
  }
  for (let i = 0; i < healthInsurance.length; i++) {
    await prisma.healthInsurance.upsert(healthInsurance[i]);
  }

  for (let i = 0; i < user.length; i++) {
    await prisma.user.create(user[i]);
  }
  for (let i = 0; i < speciality.length; i++) {
    await prisma.speciality.create(speciality[i]);
  }
  for (let i = 0; i < pathologies.length; i++) {
    await prisma.pathologies.create(pathologies[i]);
  }
  for (let i = 0; i < funder.length; i++) {
    await prisma.funder.create(funder[i]);
  }
  for (let i = 0; i < healthCenter.length; i++) {
    await prisma.healthCenter.create(healthCenter[i]);
  }
  for (let i = 0; i < medicalTests.length; i++) {
    await prisma.medicalTests.create(medicalTests[i]);
  }
  for (let i = 0; i < medic.length; i++) {
    await prisma.medic.create(medic[i]);
  }
  for (let i = 0; i < medicalTreatment.length; i++) {
    await prisma.medicalTreatment.create(medicalTreatment[i]);
  }
  for (let i = 0; i < patient.length; i++) {
    await prisma.patient.create(patient[i]);
  }
  for (let i = 0; i < clinicHistory.length; i++) {
    await prisma.clinicHistory.create(clinicHistory[i]);
  }
  for (let i = 0; i < doctorsVisit.length; i++) {
    await prisma.doctorsVisit.create(doctorsVisit[i]);
  }
  for (let i = 0; i < socialHistory.length; i++) {
    await prisma.socialHistory.create(socialHistory[i]);
  }
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });
