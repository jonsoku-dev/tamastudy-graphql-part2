import { combineResolvers } from 'graphql-resolvers';
import isAuthenticated from '../../Middleware/isAuthenticated';
import { CreatePostResponse, MutationCreatePostArgs } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Mutation: {
    CreatePost: combineResolvers(
      isAuthenticated,
      async (_: any, { input }: MutationCreatePostArgs, { user }: any, ____: any): Promise<CreatePostResponse> => {
        try {
          let newPost = await PostModel.create({
            ...input,
            user: user._id,
          });

          newPost = await newPost
            .populate({
              path: 'user',
              model: 'User',
              select: '_id username',
            })
            .execPopulate();

          return {
            result: newPost,
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
