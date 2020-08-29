import { combineResolvers } from 'graphql-resolvers';
import { GetPostListResponse } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Query: {
    GetPostList: combineResolvers(
      async (_: any, __: any, ___: any, ____: any): Promise<GetPostListResponse> => {
        try {
          const postList = await PostModel.find()
            .populate({
              path: 'user',
              model: 'User',
              select: '_id username',
            })
            .sort({ _id: -1 }); // if not exist -> []
          return {
            result: postList,
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
