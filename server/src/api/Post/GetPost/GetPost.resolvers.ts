import { combineResolvers } from 'graphql-resolvers';
import { GetPostResponse, QueryGetPostArgs } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Query: {
    GetPost: combineResolvers(
      async (_: any, { postId }: QueryGetPostArgs, ___: any, ____: any): Promise<GetPostResponse> => {
        try {
          const post = await PostModel.findById({
            _id: postId,
          }).populate({
            path: 'user',
            model: 'User',
            select: '_id username',
          });

          if (!post) {
            throw new Error(errorName.POST_NOT_EXISTS);
          }

          return {
            result: post,
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
