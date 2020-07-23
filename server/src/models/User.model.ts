import mongoose, { Schema, Document } from 'mongoose';
import { UserDbObject } from '../generated/graphql';

type IUser = UserDbObject & Document;

const userSchema: Schema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// Export the model and return your IUser interface
export default mongoose.model<IUser>('User', userSchema);
