export const clinicHistory = [
  {
    data: {
      description: 'Descripción historia clínica',
      timeDate: new Date(),
      patient: {
        connect: { documentNumber: 38084125 },
      },
      speciality: {
        connect: { description: 'Especialidad_1' },
      },
    },
  },
  {
    data: {
      description: 'Descripción historia clínica',
      timeDate: new Date(),
      patient: {
        connect: { documentNumber: 38084123 },
      },
      speciality: {
        connect: { description: 'Especialidad_2' },
      },
    },
  },
];
