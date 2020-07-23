import mongoose, { Schema, Document } from 'mongoose';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { UserDbObject } from '../generated/graphql';
import { errorName } from '../error/constants';
import env from '../config/env';

type CustomUser = {
  generateJWT: () => string;
  matchedPassowrd: (inputPassword: string) => boolean;
};

type IUser = CustomUser & UserDbObject & Document;

const userSchema = new Schema(
  {
    email: { type: String, required: true, unique: true },
    username: { type: String, required: true },
    password: { type: String, required: true },
  },
  {
    timestamps: true,
  },
);

// Hashed Passowrd
userSchema.pre<IUser>('save', async function (next) {
  try {
    if (this.isModified('password')) return next();
    const salt = await bcrypt.genSalt();
    const hashedPassword = await bcrypt.hash(this.password, salt);
    this.password = hashedPassword;
  } catch (error) {
    throw new Error(errorName.SERVER_ERROR);
  }
});

// Matched Password
userSchema.methods.matchedPassowrd = async function (inputPassword: string) {
  try {
    return await bcrypt.compare(inputPassword, this.password);
  } catch (error) {
    throw new Error(errorName.SERVER_ERROR);
  }
};

// create JWT
userSchema.methods.generateJWT = function () {
  const payload = { _id: this._id, email: this.email };
  return jwt.sign(payload, env.JWT_SECRET);
};

export default mongoose.model<IUser>('User', userSchema);
