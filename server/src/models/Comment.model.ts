import mongoose, { Schema, Document } from 'mongoose';
import { CommentDbObject } from '../generated/graphql';

type CustomComment = {};

type IComment = CustomComment & CommentDbObject & Document;

const commentSchema = new Schema(
  {
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
    postId: {
      type: mongoose.Schema.Types.ObjectId,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

export default mongoose.model<IComment>('Comment', commentSchema);
