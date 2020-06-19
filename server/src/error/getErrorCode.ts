import { errorType, IError } from './constants';

export default (errorName: keyof typeof errorType): IError => {
  return errorType[errorName];
};
