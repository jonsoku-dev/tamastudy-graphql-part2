import { LoginMutationArgs, LoginResponse } from 'graph';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { errorName } from '../../../error/constants';
import UserModel from '../../../models/User.model';

const resolver = {
  Mutation: {
    Login: async (_: any, { input }: LoginMutationArgs, __: any, ___: any): Promise<LoginResponse> => {
      try {
        const existingUser = await UserModel.findOne({
          email: input.email,
        });

        if (!existingUser) {
          throw new Error(errorName.SERVER_ERROR);
        }

        // password 검증
        const isMatched = await bcrypt.compare(input.password, existingUser.password);

        if (!isMatched) {
          throw new Error(errorName.SERVER_ERROR);
        }

        const payload = { email: existingUser.email };

        const JWT_SECRET = process.env.SERVER_JWT_SECRET;

        if (!JWT_SECRET) {
          process.exit(1);
        }

        const token = jwt.sign(payload, JWT_SECRET);

        return {
          token,
        };
      } catch (error) {
        throw new Error(errorName.SERVER_ERROR);
      }
    },
  },
};

export default resolver;
