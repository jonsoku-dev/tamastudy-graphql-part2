import UserModel, { IUser } from './models/User.model';
import { IRequestUser } from './generated/interfaces';
import { Model } from 'mongoose';

export interface IContext {
  user: IRequestUser;
  model: {
    UserModel: Model<IUser, {}>;
  };
}

export default ({ req }: any): IContext => {
  return {
    user: req.user || null,
    model: {
      UserModel,
    },
  };
};
