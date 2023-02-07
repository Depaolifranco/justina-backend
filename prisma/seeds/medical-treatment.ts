export const medicalTreatment = [
  {
    data: {
      description: 'Tratamiento_1',
      pathologies: {
        connect: { description: 'Patología_1' },
      },
      healthCenter: {
        connect: { name: 'CentroSalud_1' },
      },
      medicalTests: {
        connect: { observations: 'Test_1' },
      },
      medic: {
        connect: { medicalLicense: 102030 },
      },
      medication: {
        connect: { name: 'Medicamento_1' },
      },
      funder: {
        connect: { name: 'Financiador_1' },
      },
    },
  },
  {
    data: {
      description: 'Tratamiento_2',
      pathologies: {
        connect: { description: 'Patología_2' },
      },
      healthCenter: {
        connect: { name: 'CentroSalud_2' },
      },
      medicalTests: {
        connect: { observations: 'Test_2' },
      },
      medic: {
        connect: { medicalLicense: 202030 },
      },
      medication: {
        connect: { name: 'Medicamento_2' },
      },
      funder: {
        connect: { name: 'Financiador_2' },
      },
    },
  },
];
