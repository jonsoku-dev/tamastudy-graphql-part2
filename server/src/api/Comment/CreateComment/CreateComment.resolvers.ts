import { combineResolvers } from 'graphql-resolvers';
import isAuthenticated from '../../Middleware/isAuthenticated';
import { CreateCommentResponse, MutationCreateCommentArgs } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import CommentModel from '../../../models/Comment.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Mutation: {
    CreateComment: combineResolvers(
      isAuthenticated,
      async (_: any, { postId, input }: MutationCreateCommentArgs, { user }: any, ____: any): Promise<CreateCommentResponse> => {
        try {
          const post = await PostModel.findById({ _id: postId });

          if (!post) {
            throw new Error(errorName.POST_NOT_EXISTS);
          }

          let newComment = await CommentModel.create({
            ...input,
            user: user._id,
            postId: postId,
          });

          if (post.comments) {
            post.comments.unshift(newComment._id);
            await post.save();
          }

          newComment = await newComment
            .populate({
              path: 'user',
              model: 'User',
              select: '_id username',
            })
            .execPopulate();

          return {
            result: newComment,
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
