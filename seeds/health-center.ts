export const healthCenter = [
  {
    data: {
      name: 'CentroSalud_1',
      address: 'Almafuerte 5050',
      medicDirector: 'Maximo Martin',
      operatingRoom: 30,
      intensiveTherapyBed: 200,
      preTherapyBed: 50,
      speciality: {
        connect: { description: 'Especialidad_1' },
      },
      funder: {
        connect: { name: 'Financiador_1' },
      },
    },
  },
  {
    data: {
      name: 'CentroSalud_2',
      address: 'Bustamante 3050',
      medicDirector: 'Martin Aguirre',
      operatingRoom: 20,
      intensiveTherapyBed: 100,
      preTherapyBed: 30,
      speciality: {
        connect: { description: 'Especialidad_2' },
      },
      funder: {
        connect: { name: 'Financiador_2' },
      },
    },
  },
];
