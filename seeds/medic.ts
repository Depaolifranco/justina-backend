export const medic = [
  {
    data: {
      name: 'Franco',
      lastname: 'Depaoli',
      medicalLicense: 102030,
      phoneNumber: '1129304112',
      maritalStatus: {
        connect: { description: 'Soltero' },
      },
      status: {
        connect: { description: 'Activo' },
      },
      user: {
        connect: { email: 'depaolifranco98@gmail.com' },
      },
      speciality: {
        connect: { description: 'Especialidad_1' },
      },
    },
  },
  {
    data: {
      name: 'Carlos',
      lastname: 'Depaoli',
      medicalLicense: 202030,
      phoneNumber: '1131344156',
      maritalStatus: {
        connect: { description: 'Casado' },
      },
      status: {
        connect: { description: 'Activo' },
      },
      user: {
        connect: { email: 'depaolicarlos@gmail.com' },
      },
      speciality: {
        connect: { description: 'Especialidad_2' },
      },
    },
  },
];
