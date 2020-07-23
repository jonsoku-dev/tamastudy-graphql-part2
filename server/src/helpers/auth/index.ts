import jwt from 'jsonwebtoken';
import env from '../../config/env';
import { IRequestUser } from '../../types/interfaces';

export const setContextUser = (bearerToken: string) => {
  const token = bearerToken.split(' ')[1];
  try {
    return jwt.verify(token.split(' ')[1], env.JWT_SECRET) as IRequestUser;
  } catch (error) {
    console.log(error, '😈 Verify token Error !!');
    return;
  }
};
