import { combineResolvers } from 'graphql-resolvers';
import isAuthenticated from '../../Middleware/isAuthenticated';
import { EditCommentResponse, MutationEditCommentArgs } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import CommentModel from '../../../models/Comment.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Mutation: {
    EditComment: combineResolvers(
      isAuthenticated,
      async (_: any, { postId, commentId, input }: MutationEditCommentArgs, { user }: any, ____: any): Promise<EditCommentResponse> => {
        try {
          const post = await PostModel.findById({ _id: postId });

          if (!post) {
            throw new Error(errorName.POST_NOT_EXISTS);
          }

          // 댓글이 삭제되는 단계. (삭제됨)
          const findComment = await CommentModel.findById({ _id: commentId });

          if (!findComment) {
            throw new Error(errorName.COMMENT_NOT_EXISTS);
          }

          // 작성자 검증
          if (findComment.user && String(findComment.user._id) !== user._id) {
            throw new Error(errorName.PERMISSION_ERROR);
          }

          const editedComment = await CommentModel.findByIdAndUpdate(
            { _id: commentId },
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

          if (!editedComment) {
            throw new Error(errorName.COMMENT_NOT_EXISTS);
          }

          return {
            result: editedComment,
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
