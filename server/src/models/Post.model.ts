import mongoose, { Schema, Document } from 'mongoose';
import { PostDbObject } from '../generated/graphql';

type CustomPost = {};

type IPost = CustomPost & PostDbObject & Document;

const postSchema = new Schema(
  {
    title: {
      type: String,
      required: true,
      trim: true,
      maxlength: [50, '50자 이내로 입력해주세요. '],
    },
    desc: {
      type: String,
      required: true,
      trim: true,
      maxlength: [1000, '1000자 이내로 입력해주세요. '],
    },
    user: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
    comments: [
      {
        type: mongoose.Schema.Types.ObjectId,
      },
    ],
    view: {
      type: Number,
      default: 0,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IPost>('Post', postSchema);
