export const medicalTests = [
  {
    data: {
      observations: 'Test_1',
      preparation: 'Preparación_1',
      evaluations: 'Evaluación_1',
      waitingList: 'ListaEspera_1',
      donorType: {
        connect: { description: 'TipoDonante_1' },
      },
      testType: {
        connect: { description: 'TipoEstudio_1' },
      },
    },
  },
  {
    data: {
      observations: 'Test_2',
      preparation: 'Preparación_2',
      evaluations: 'Evaluación_2',
      waitingList: 'ListaEspera_2',
      donorType: {
        connect: { description: 'TipoDonante_2' },
      },
      testType: {
        connect: { description: 'TipoEstudio_2' },
      },
    },
  },
];
