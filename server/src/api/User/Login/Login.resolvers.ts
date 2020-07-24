import { MutationLoginArgs, LoginResponse } from '../../../generated/graphql';
import { errorName } from '../../../error/constants';
import UserModel from '../../../models/User.model';

const resolver = {
  Mutation: {
    Login: async (_: any, { input }: MutationLoginArgs, __: any, ___: any): Promise<LoginResponse> => {
      console.log(input);
      try {
        const existingUser = await UserModel.findOne({
          email: input.email,
        });

        if (!existingUser) {
          throw new Error('유저가 존재하지 않습니다. ');
        }
        // Check password
        const isMatched = existingUser.matchedPassowrd(input.password);

        if (!isMatched) {
          throw new Error('비밀번호가 일치하지 않습니다. ');
        }

        // Genereate token
        const token = existingUser.generateJWT();

        return {
          token,
        };
      } catch (error) {
        console.log(error);
        throw new Error(errorName.SERVER_ERROR);
      }
    },
  },
};

export default resolver;
