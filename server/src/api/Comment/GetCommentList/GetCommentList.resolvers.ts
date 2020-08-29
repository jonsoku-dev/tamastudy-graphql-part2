import { combineResolvers } from 'graphql-resolvers';
import { QueryGetCommentListArgs, GetCommentListResponse } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import CommentModel from '../../../models/Comment.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Query: {
    GetCommentList: combineResolvers(
      async (_: any, { postId }: QueryGetCommentListArgs, ___: any, ____: any): Promise<GetCommentListResponse> => {
        try {
          const post = await PostModel.findById({ _id: postId });

          if (!post) {
            throw new Error(errorName.POST_NOT_EXISTS);
          }

          const commentList = await CommentModel.find({
            postId,
          })
            .populate({
              path: 'user',
              model: 'User',
              select: '_id username',
            })
            .sort({ _id: -1 });

          if (!commentList) {
            throw new Error(errorName.SERVER_ERROR);
          }

          return {
            result: commentList,
          };
        } catch (error) {
          console.error(error);
          throw new Error(errorName.SERVER_ERROR);
        }
      },
    ),
  },
};

export default resolver;
