import { GraphQLError } from 'graphql';
import { errorName } from './constants';
import getErrorCode from './getErrorCode';

export default (err: GraphQLError) => {
  const error = getErrorCode(err.message as keyof typeof errorName);
  return {
    path: err.path,
    locations: err.locations,
    message: `${err.originalError?.message}:: ${error.message}`,
    statusCode: error.statusCode,
  };
};
