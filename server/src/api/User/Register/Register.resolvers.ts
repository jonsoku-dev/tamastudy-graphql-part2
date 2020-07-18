import bcrypt from 'bcryptjs';
import { RegisterResponse, RegisterMutationArgs } from 'graph';
import { errorName } from '../../../error/constants';
import UserModel from '../../../models/User.model';

const resolver = {
  Mutation: {
    Register: async (_: any, { input }: RegisterMutationArgs, __: any, ___: any): Promise<RegisterResponse> => {
      try {
        const existingUser = await UserModel.findOne({
          email: input.email,
        });

        if (existingUser) {
          throw new Error(errorName.SERVER_ERROR);
        }

        const salt = await bcrypt.genSalt();

        const hashedPassword = await bcrypt.hash(input.password, salt);

        const cpInput = { ...input };

        cpInput.password = hashedPassword;

        const newUser = await UserModel.create(cpInput);

        return {
          result: `${newUser.username}님 환영합니다. `,
        };
      } catch (error) {
        console.error(error);
        throw new Error(errorName.SERVER_ERROR);
      }
    },
  },
};

export default resolver;
