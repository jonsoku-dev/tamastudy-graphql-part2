import { combineResolvers } from 'graphql-resolvers';
import isAuthenticated from '../../Middleware/isAuthenticated';
import { DeletePostResponse, MutationDeletePostArgs } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Mutation: {
    DeletePost: combineResolvers(
      isAuthenticated,
      async (_: any, { postId }: MutationDeletePostArgs, ___: any, ____: any): Promise<DeletePostResponse> => {
        try {
          const deletedPost = await PostModel.findByIdAndDelete({ _id: postId }).populate({
            path: 'user',
            model: 'User',
            select: '_id username',
          });

          if (!deletedPost) {
            throw new Error(errorName.POST_NOT_EXISTS);
          }

          return {
            result: deletedPost,
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
