-- CreateTable
CREATE TABLE `DocumentType` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Sex` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Patient` (
    `id` VARCHAR(191) NOT NULL,
    `sexId` VARCHAR(191) NULL,
    `maritalStatusId` VARCHAR(191) NULL,
    `statusId` VARCHAR(191) NULL,
    `documentTypeId` VARCHAR(191) NULL,
    `name` VARCHAR(255) NOT NULL,
    `lastname` VARCHAR(255) NOT NULL,
    `documentNumber` INTEGER NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `age` INTEGER NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `phoneNumber` INTEGER NOT NULL,

    INDEX `sexId`(`sexId`),
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

    INDEX `specialityId`(`specialityId`),
    INDEX `funderId`(`funderId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Funder` (
    `id` VARCHAR(191) NOT NULL,
    `transplantTypeId` VARCHAR(191) NOT NULL,
    `healthInsuranceId` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `address` VARCHAR(255) NOT NULL,
    `medicDirector` VARCHAR(255) NOT NULL,
    `operatingRoom` INTEGER NOT NULL,
    `intensiveTherapyBed` INTEGER NOT NULL,
    `preTherapyBed` INTEGER NOT NULL,

    INDEX `transplantTypeId`(`transplantTypeId`),
    INDEX `healthInsuranceId`(`healthInsuranceId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `TransplantType` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `HealthInsurance` (
    `id` VARCHAR(191) NOT NULL,
    `name` VARCHAR(255) NOT NULL,
    `coverage` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `MaritalStatus` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Medic` (
    `id` VARCHAR(191) NOT NULL,
    `maritalStatusId` VARCHAR(191) NOT NULL,
    `statusId` VARCHAR(191) NOT NULL,
    `specialityId` VARCHAR(191) NOT NULL,
    `userId` VARCHAR(191) NOT NULL,
    `email` VARCHAR(255) NOT NULL,
    `password_2` VARCHAR(255) NOT NULL,
    `medicalLicense` INTEGER NOT NULL,
    `phoneNumber` VARCHAR(255) NOT NULL,

    INDEX `maritalStatusId`(`maritalStatusId`),
    INDEX `specialityId`(`specialityId`),
    INDEX `statusId`(`statusId`),
    INDEX `userId`(`userId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `NephrologistType` (
    `id` VARCHAR(191) NOT NULL,
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
    `nephrologistTypeId` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

    INDEX `nephrologistTypeId`(`nephrologistTypeId`),
    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- CreateTable
CREATE TABLE `Status` (
    `id` VARCHAR(191) NOT NULL,
    `description` VARCHAR(255) NOT NULL,

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

    PRIMARY KEY (`id`)
) DEFAULT CHARACTER SET utf8mb4 COLLATE utf8mb4_unicode_ci;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_sexId_fkey` FOREIGN KEY (`sexId`) REFERENCES `Sex`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_maritalStatusId_fkey` FOREIGN KEY (`maritalStatusId`) REFERENCES `MaritalStatus`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_statusId_fkey` FOREIGN KEY (`statusId`) REFERENCES `Status`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `Patient` ADD CONSTRAINT `Patient_documentTypeId_fkey` FOREIGN KEY (`documentTypeId`) REFERENCES `DocumentType`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `SocialHistory` ADD CONSTRAINT `SocialHistory_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

-- AddForeignKey
ALTER TABLE `DoctorsVisit` ADD CONSTRAINT `DoctorsVisit_patientId_fkey` FOREIGN KEY (`patientId`) REFERENCES `Patient`(`id`) ON DELETE CASCADE ON UPDATE CASCADE;

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
