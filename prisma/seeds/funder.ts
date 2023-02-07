export const funder = [
  {
    data: {
      name: 'Financiador_1',
      transplantTypeName: 'TipoTransplante_1',
      medicDirector: 'Jorge Gonzalez',
      address: 'Playadito 1234',
      transplantType: {
        connect: { description: 'Corazón' },
      },
      healthInsurance: {
        connect: { id: 1 },
      },
    },
  },
  {
    data: {
      name: 'Financiador_2',
      transplantTypeName: 'TipoTransplante_1',
      medicDirector: 'Micaela Morales',
      address: 'Toro 1234',
      transplantType: {
        connect: { description: 'Pulmonar' },
      },
      healthInsurance: {
        connect: { id: 5 },
      },
    },
  },
];
