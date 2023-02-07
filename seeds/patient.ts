export const patient = [
  {
    data: {
      name: 'Marcos',
      lastname: 'Jimenez',
      documentNumber: 38084125,
      address: 'Catamarca 3325',
      birthdate: new Date('1995-04-05'),
      email: 'mjimenez@hotmail.com',
      phoneNumber: '1125685877',
      genre: {
        connect: { description: 'Masculino' },
      },
      user: {
        connect: { email: 'mjimenez@hotmail.com' },
      },
      maritalStatus: {
        connect: { description: 'Casado' },
      },
      status: {
        connect: { description: 'Activo' },
      },
      pathologies: {
        connect: { description: 'Patología_1' },
      },
      documentType: {
        connect: { description: 'DNI' },
      },
      medicalTreatment: {
        connect: { description: 'Tratamiento_1' },
      },
    },
  },
  {
    data: {
      name: 'Juana',
      lastname: 'Perez',
      documentNumber: 38084123,
      address: 'Mendoza 3325',
      birthdate: new Date('1995-06-04'),
      email: 'jperez@yahoo.com',
      phoneNumber: '1122485417',
      genre: {
        connect: { description: 'Femenino' },
      },
      user: {
        connect: { email: 'jperez@yahoo.com' },
      },
      maritalStatus: {
        connect: { description: 'Soltero' },
      },
      status: {
        connect: { description: 'Activo' },
      },
      pathologies: {
        connect: { description: 'Patología_2' },
      },
      documentType: {
        connect: { description: 'DNI' },
      },
      medicalTreatment: {
        connect: { description: 'Tratamiento_2' },
      },
    },
  },
];
