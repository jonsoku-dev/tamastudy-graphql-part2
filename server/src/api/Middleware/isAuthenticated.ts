import { skip } from 'graphql-resolvers';
import { errorName } from '../../error/constants';

export default (_: any, __: any, { user }: any) => {
  console.info('====================================> start of isAuthenticated resolver middleware');
  if (user) {
    skip;
  } else {
    throw new Error(errorName.IS_AUTHENTICATED_ERROR);
  }
  console.info('====================================> end of isAuthenticated resolver middleware');
};
