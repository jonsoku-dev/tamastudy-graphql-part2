import { IRequestUser } from './generated/interfaces';
import { setContextUser } from './helpers/auth';
import { ExpressContext } from 'apollo-server-express/dist/ApolloServer';

export default (context: ExpressContext) => {
  let user: IRequestUser | undefined;

  if (context.req.headers['authorization']) {
    user = setContextUser(context.req.headers['authorization']);
  }

  console.log(user);

  return {
    user,
  };
};
