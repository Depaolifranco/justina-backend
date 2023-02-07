import { encodePasswordSync } from '../../src/utils/bcrypt';

export const user = [
  {
    data: {
      email: 'depaolifranco98@gmail.com',
      password: encodePasswordSync('1234'),
      userType: {
        connect: { description: 'Médico' },
      },
    },
  },
  {
    data: {
      email: 'depaolicarlos@gmail.com',
      password: encodePasswordSync('1234'),
      userType: {
        connect: { description: 'Médico' },
      },
    },
  },
  {
    data: {
      email: 'mjimenez@hotmail.com',
      password: encodePasswordSync('1234'),
      userType: {
        connect: { description: 'Paciente' },
      },
    },
  },
  {
    data: {
      email: 'jperez@yahoo.com',
      password: encodePasswordSync('1234'),
      userType: {
        connect: { description: 'Paciente' },
      },
    },
  },
];
