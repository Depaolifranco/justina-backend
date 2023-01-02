import * as bcrypt from 'bcrypt';

export function encodePassword(rawPassword: string) {
  return bcrypt.hash(rawPassword, 10);
}

export function comparePassword(rawPassword1: string, rawPassword2: string) {
  return bcrypt.compare(rawPassword1, rawPassword2);
}
