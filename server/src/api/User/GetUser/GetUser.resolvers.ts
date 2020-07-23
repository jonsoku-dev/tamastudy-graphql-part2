import UserModel from '../../../models/User.model';
import { errorName } from '../../../error/constants';
import { GetUserResponse } from '../../../generated/graphql';

const resolver = {
  Query: {
    GetUser: async (_: any, __: any, context: any, ____: any): Promise<GetUserResponse> => {
      try {
        const { email } = context.user;

        const findUser = await UserModel.findOne({
          email,
        });

        if (!findUser) {
          console.log('user가 존재하지 않습니다. ');
          throw new Error(errorName.USER_NOT_EXISTS);
        }

        return {
          result: findUser,
        };
      } catch (error) {
        throw new Error(errorName.SERVER_ERROR);
      }
    },
  },
};

export default resolver;
