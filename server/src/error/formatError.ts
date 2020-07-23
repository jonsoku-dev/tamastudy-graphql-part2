import { GraphQLError } from 'graphql';
import { errorName } from './constants';
import getErrorCode from './getErrorCode';

export default (err: GraphQLError) => {
  const error = getErrorCode(err.message as keyof typeof errorName);
  return { message: error.message, statusCode: error.statusCode };
};
