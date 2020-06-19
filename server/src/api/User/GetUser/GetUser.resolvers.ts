import { errorName } from './../../../../src/error/constants';
import UserModel from './../../../../src/models/User.model';
import { GetUserQueryArgs, GetUserResponse } from './../../../../src/types/graph.d';

const resolver = {
  Query: {
    GetUser: async (_: any, { _id }: GetUserQueryArgs, __: any, ___: any): Promise<GetUserResponse> => {
      try {
        const user = await UserModel.findById({ _id });
        if (user) {
          return {
            result: user,
          };
        }
        throw new Error(errorName.USER_NOT_EXISTS);
      } catch (error) {
        console.error(error);
        throw new Error(errorName.SERVER_ERROR);
      }
    },
  },
};

export default resolver;
