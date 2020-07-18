import { GetUserResponse } from 'graph';
import UserModel from '../../../models/User.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Query: {
    GetUser: async (_: any, __: any, context: any, ____: any): Promise<GetUserResponse> => {
      try {
        const { email } = context.user;

        const findUser = await UserModel.findOne({
          email,
        });

        if (!findUser) {
          throw new Error(errorName.SERVER_ERROR);
        }

        console.log(findUser);

        return {
          result: '1234',
        };
      } catch (error) {
        throw new Error(errorName.SERVER_ERROR);
      }
    },
  },
};

export default resolver;
