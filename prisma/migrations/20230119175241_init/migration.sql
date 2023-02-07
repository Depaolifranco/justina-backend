-- CreateTable
CREATE TABLE `DocumentType` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `DocumentType_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Genre` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Genre_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patient` (
    `id` VARCHAR(191) NOT NULL,
    `genreId` VARCHAR(191) NULL,
    `userId` VARCHAR(191) NULL,
    `maritalStatusId` VARCHAR(191) NULL,
    `statusId` VARCHAR(191) NULL,
    `pathologiesId` VARCHAR(191) NULL,
    `documentTypeId` VARCHAR(191) NULL,
    `medicalTreatmentId` VARCHAR(191) NULL,
    `name` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `documentNumber` INTEGER NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `birthdate` DATE NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Patient_documentNumber_key`(`documentNumber`),
    UNIQUE INDEX `Patient_email_key`(`email`),
    INDEX `genreId`(`genreId`),
    INDEX `maritalStatusId`(`maritalStatusId`),
    INDEX `statusId`(`statusId`),
    INDEX `documentTypeId`(`documentTypeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `SocialHistory` (
    `id` VARCHAR(191) NOT NULL,
    `patientId` VARCHAR(191) NOT NULL,
    `neverAlcohol` BOOLEAN NOT NULL,
    `rarelyAlcohol` BOOLEAN NOT NULL,
    `sometimesAlcohol` BOOLEAN NOT NULL,
    `usuallyAlcohol` BOOLEAN NOT NULL,
    `neverGym` BOOLEAN NOT NULL,
    `rarelyGym` BOOLEAN NOT NULL,
    `sometimesGym` BOOLEAN NOT NULL,
    `usuallyGym` BOOLEAN NOT NULL,
    `neverDrugs` BOOLEAN NOT NULL,
    `rarelyDrugs` BOOLEAN NOT NULL,
    `usuallyDrugs` BOOLEAN NOT NULL,
    `descriptionDrug` VARCHAR(255) NOT NULL,
    `neverCoffee` BOOLEAN NOT NULL,
    `rarelyCoffee` BOOLEAN NOT NULL,
    `sometimesCoffee` BOOLEAN NOT NULL,
    `usuallyCoffee` BOOLEAN NOT NULL,
    `neverSmoke` BOOLEAN NOT NULL,
    `rarelySmoke` BOOLEAN NOT NULL,
    `usuallySmoke` BOOLEAN NOT NULL,
    `descriptionSmoke` VARCHAR(255) NOT NULL,

    INDEX `patientId`(`patientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DoctorsVisit` (
    `id` VARCHAR(191) NOT NULL,
    `patientId` VARCHAR(191) NOT NULL,
    `pathologiesId` VARCHAR(191) NOT NULL,
    `timeDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),
    `reason` VARCHAR(255) NOT NULL,
    `method` VARCHAR(255) NOT NULL,
    `idiopathic` INTEGER NOT NULL,
    `creatinine` INTEGER NOT NULL,
    `clearence` INTEGER NOT NULL,
    `peritoneal` INTEGER NOT NULL,
    `waitingYears` INTEGER NOT NULL,
    `operatives` INTEGER NOT NULL,

    INDEX `patientId`(`patientId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `ClinicHistory` (
    `id` VARCHAR(191) NOT NULL,
    `patientId` VARCHAR(191) NOT NULL,
    `specialityId` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,
    `timeDate` DATETIME(3) NOT NULL DEFAULT CURRENT_TIMESTAMP(3),

    INDEX `patientId`(`patientId`),
    INDEX `specialityId`(`specialityId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HealthCenter` (
    `id` VARCHAR(191) NOT NULL,
    `specialityId` VARCHAR(191) NOT NULL,
    `funderId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `medicDirector` VARCHAR(255) NOT NULL,
    `operatingRoom` INTEGER NOT NULL,
    `intensiveTherapyBed` INTEGER NOT NULL,
    `preTherapyBed` INTEGER NOT NULL,

    UNIQUE INDEX `HealthCenter_name_key`(`name`),
    INDEX `specialityId`(`specialityId`),
    INDEX `funderId`(`funderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funder` (
    `id` VARCHAR(191) NOT NULL,
    `transplantTypeId` VARCHAR(191) NOT NULL,
    `healthInsuranceId` INTEGER NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `transplantTypeName` VARCHAR(255) NOT NULL,
    `medicDirector` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Funder_name_key`(`name`),
    INDEX `transplantTypeId`(`transplantTypeId`),
    INDEX `healthInsuranceId`(`healthInsuranceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransplantType` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `TransplantType_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HealthInsurance` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `name` VARCHAR(255) NOT NULL,
    `coverage` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MaritalStatus` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `MaritalStatus_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medic` (
    `id` VARCHAR(191) NOT NULL,
    `maritalStatusId` VARCHAR(191) NOT NULL,
    `statusId` VARCHAR(191) NOT NULL,
    `specialityId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `medicalLicense` INTEGER NOT NULL,
    `phoneNumber` VARCHAR(191) NOT NULL,

    UNIQUE INDEX `Medic_medicalLicense_key`(`medicalLicense`),
    INDEX `maritalStatusId`(`maritalStatusId`),
    INDEX `specialityId`(`specialityId`),
    INDEX `statusId`(`statusId`),
    INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NephrologistType` (
    `id` INTEGER NOT NULL AUTO_INCREMENT,
    `elevatedBloodPressure` BOOLEAN NOT NULL,
    `diabetes` BOOLEAN NOT NULL,
    `idiopathic` VARCHAR(255) NOT NULL,
    `autoimmune` BOOLEAN NOT NULL,
    `nephropathy` BOOLEAN NOT NULL,
    `creatinine` INTEGER NOT NULL,
    `clearence` INTEGER NOT NULL,
    `access` VARCHAR(255) NOT NULL,
    `peritoneal` VARCHAR(255) NOT NULL,
    `waitingYears` INTEGER NOT NULL,
    `operatives` INTEGER NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Speciality` (
    `id` VARCHAR(191) NOT NULL,
    `nephrologistTypeId` INTEGER NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Speciality_description_key`(`description`),
    INDEX `nephrologistTypeId`(`nephrologistTypeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Status` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Status_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `User` (
    `id` VARCHAR(191) NOT NULL,
    `userTypeId` VARCHAR(191) NULL,
    `email` VARCHAR(255) NOT NULL,
    `password` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `User_email_key`(`email`),
    INDEX `userTypeId`(`userTypeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `UserType` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `UserType_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Pathologies` (
    `id` VARCHAR(191) NOT NULL,
    `specialityId` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Pathologies_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicalTreatment` (
    `id` VARCHAR(191) NOT NULL,
    `pathologiesId` VARCHAR(191) NOT NULL,
    `healthCenterId` VARCHAR(191) NOT NULL,
    `medicalTestsId` VARCHAR(191) NOT NULL,
    `medicId` VARCHAR(191) NOT NULL,
    `medicationId` VARCHAR(191) NOT NULL,
    `funderId` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `MedicalTreatment_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medication` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `immunosuppressant` VARCHAR(255) NOT NULL,
    `prophylaxis` VARCHAR(255) NOT NULL,
    `anemia` VARCHAR(255) NOT NULL,
    `calciumMetabolism` VARCHAR(255) NOT NULL,
    `highBloodPressure` VARCHAR(255) NOT NULL,
    `cholesterol` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `Medication_name_key`(`name`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MedicalTests` (
    `id` VARCHAR(191) NOT NULL,
    `donorTypeId` VARCHAR(191) NOT NULL,
    `testTypeId` VARCHAR(191) NOT NULL,
    `observations` VARCHAR(255) NOT NULL,
    `preparation` VARCHAR(255) NOT NULL,
    `evaluations` VARCHAR(255) NOT NULL,
    `waitingList` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `MedicalTests_observations_key`(`observations`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `DonorType` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `DonorType_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TestType` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    UNIQUE INDEX `TestType_description_key`(`description`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_genreId_fkey` FOREIGN KEY (`genreId`) REFERENCES `Genre`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_maritalStatusId_fkey` FOREIGN KEY (`maritalStatusId`) REFERENCES `MaritalStatus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `Status`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_pathologiesId_fkey` FOREIGN KEY (`pathologiesId`) REFERENCES `Pathologies`(`id`) ON DELETE SET NULL ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_documentTypeId_fkey` FOREIGN KEY (`documentTypeId`) REFERENCES `DocumentType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_medicalTreatmentId_fkey` FOREIGN KEY (`medicalTreatmentId`) REFERENCES `MedicalTreatment`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SocialHistory` ADD CONSTRAINT `SocialHistory_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorsVisit` ADD CONSTRAINT `DoctorsVisit_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorsVisit` ADD CONSTRAINT `DoctorsVisit_pathologiesId_fkey` FOREIGN KEY (`pathologiesId`) REFERENCES `Pathologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClinicHistory` ADD CONSTRAINT `ClinicHistory_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `ClinicHistory` ADD CONSTRAINT `ClinicHistory_specialityId_fkey` FOREIGN KEY (`specialityId`) REFERENCES `Speciality`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthCenter` ADD CONSTRAINT `HealthCenter_specialityId_fkey` FOREIGN KEY (`specialityId`) REFERENCES `Speciality`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `HealthCenter` ADD CONSTRAINT `HealthCenter_funderId_fkey` FOREIGN KEY (`funderId`) REFERENCES `Funder`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funder` ADD CONSTRAINT `Funder_transplantTypeId_fkey` FOREIGN KEY (`transplantTypeId`) REFERENCES `TransplantType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Funder` ADD CONSTRAINT `Funder_healthInsuranceId_fkey` FOREIGN KEY (`healthInsuranceId`) REFERENCES `HealthInsurance`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medic` ADD CONSTRAINT `Medic_maritalStatusId_fkey` FOREIGN KEY (`maritalStatusId`) REFERENCES `MaritalStatus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medic` ADD CONSTRAINT `Medic_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `Status`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medic` ADD CONSTRAINT `Medic_specialityId_fkey` FOREIGN KEY (`specialityId`) REFERENCES `Speciality`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Medic` ADD CONSTRAINT `Medic_userId_fkey` FOREIGN KEY (`userId`) REFERENCES `User`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Speciality` ADD CONSTRAINT `Speciality_nephrologistTypeId_fkey` FOREIGN KEY (`nephrologistTypeId`) REFERENCES `NephrologistType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `User` ADD CONSTRAINT `User_userTypeId_fkey` FOREIGN KEY (`userTypeId`) REFERENCES `UserType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Pathologies` ADD CONSTRAINT `Pathologies_specialityId_fkey` FOREIGN KEY (`specialityId`) REFERENCES `Speciality`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTreatment` ADD CONSTRAINT `MedicalTreatment_pathologiesId_fkey` FOREIGN KEY (`pathologiesId`) REFERENCES `Pathologies`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTreatment` ADD CONSTRAINT `MedicalTreatment_healthCenterId_fkey` FOREIGN KEY (`healthCenterId`) REFERENCES `HealthCenter`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTreatment` ADD CONSTRAINT `MedicalTreatment_medicalTestsId_fkey` FOREIGN KEY (`medicalTestsId`) REFERENCES `MedicalTests`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTreatment` ADD CONSTRAINT `MedicalTreatment_medicId_fkey` FOREIGN KEY (`medicId`) REFERENCES `Medic`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTreatment` ADD CONSTRAINT `MedicalTreatment_medicationId_fkey` FOREIGN KEY (`medicationId`) REFERENCES `Medication`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTreatment` ADD CONSTRAINT `MedicalTreatment_funderId_fkey` FOREIGN KEY (`funderId`) REFERENCES `Funder`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTests` ADD CONSTRAINT `MedicalTests_donorTypeId_fkey` FOREIGN KEY (`donorTypeId`) REFERENCES `DonorType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `MedicalTests` ADD CONSTRAINT `MedicalTests_testTypeId_fkey` FOREIGN KEY (`testTypeId`) REFERENCES `TestType`(`id`) ON DELETE RESTRICT ON UPDATE CASCADE;
