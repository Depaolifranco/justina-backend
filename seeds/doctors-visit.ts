export const doctorsVisit = [
  {
    data: {
      timeDate: new Date(),
      reason: 'MotivoConsulta_1',
      method: 'Procedimiento_1',
      idiopathic: 5,
      creatinine: 3,
      clearence: 2,
      peritoneal: 1,
      waitingYears: 2,
      operatives: 3,
      patient: {
        connect: { documentNumber: 38084125 },
      },
      pathologies: {
        connect: { description: 'Patología_1' },
      },
    },
  },
  {
    data: {
      timeDate: new Date(),
      reason: 'MotivoConsulta_2',
      method: 'Procedimiento_2',
      idiopathic: 2,
      creatinine: 2,
      clearence: 5,
      peritoneal: 3,
      waitingYears: 5,
      operatives: 2,
      patient: {
        connect: { documentNumber: 38084123 },
      },
      pathologies: {
        connect: { description: 'Patología_2' },
      },
    },
  },
];
