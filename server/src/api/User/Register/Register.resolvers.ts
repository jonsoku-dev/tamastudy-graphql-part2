import bcrypt from 'bcryptjs';
import { RegisterResponse, MutationRegisterArgs } from '../../../generated/graphql';
import { errorName } from '../../../error/constants';
import UserModel from '../../../models/User.model';

const resolver = {
  Mutation: {
    Register: async (_: any, { input }: MutationRegisterArgs, __: any, ___: any): Promise<RegisterResponse> => {
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
          result: newUser,
        };
      } catch (error) {
        console.error(error);
        throw new Error(errorName.SERVER_ERROR);
      }
    },
  },
};

export default resolver;
