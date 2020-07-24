import { combineResolvers } from 'graphql-resolvers';
import UserModel from '../../../models/User.model';
import { errorName } from '../../../error/constants';
import { GetUserResponse } from '../../../generated/graphql';
import isAuthenticated from '../../Middleware/isAuthenticated';
import { IContext } from '../../../context';

const resolver = {
  Query: {
    GetUser: combineResolvers(
      isAuthenticated,
      async (_: any, __: any, { user }: IContext, ____: any): Promise<GetUserResponse> => {
        try {
          const findUser = await UserModel.findById({ _id: user._id });

          if (!findUser) {
            throw new Error('유저가 존재하지 않습니다. ');
          }

          return {
            result: findUser,
          };
        } catch (error) {
          throw new Error(errorName.SERVER_ERROR);
        }
      },
    ),
  },
};

export default resolver;
