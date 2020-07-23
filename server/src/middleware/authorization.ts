import jwt from 'jsonwebtoken';
import env from '../config/env';
import { NextFunction } from 'express';
import { IRequestUser } from '../generated/interfaces';

const verifyToken = (bearerToken: string) => {
  const token = bearerToken.split(' ')[1];
  try {
    return jwt.verify(token, env.JWT_SECRET) as IRequestUser;
  } catch (error) {
    console.log('Verify token Error :: token is wrong ~ 😈');
    return undefined;
  }
};

export default (req: any, _: any, next: NextFunction) => {
  console.info('====================================> start of authorization middleware');
  const token = req.headers['authorization'];
  if (token) {
    console.info(`⭕️ Request with token\n🔔:: Token is ${token}`);
    const user = verifyToken(token);
    req.user = user;
  } else {
    console.info(`❌ Request without token\n🔕:: Token is ${token}`);
    req.user = undefined;
  }
  console.info('====================================> end of authorization middleware');
  next();
};
