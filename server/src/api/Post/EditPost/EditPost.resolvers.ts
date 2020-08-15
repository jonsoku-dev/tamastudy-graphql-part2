import { combineResolvers } from 'graphql-resolvers';
import isAuthenticated from '../../Middleware/isAuthenticated';
import { EditPostResponse, MutationEditPostArgs } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Mutation: {
    EditPost: combineResolvers(
      isAuthenticated,
      async (_: any, { postId, input }: MutationEditPostArgs, ___: any, ____: any): Promise<EditPostResponse> => {
        try {
          const editedPost = await PostModel.findByIdAndUpdate(
            { _id: postId },
            {
              ...input,
            },
            {
              new: true,
              runValidators: false,
            },
          ).populate({
            path: 'user',
            model: 'User',
            select: '_id username',
          });

          if (!editedPost) {
            throw new Error(errorName.POST_NOT_EXISTS);
          }

          return {
            result: editedPost,
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
