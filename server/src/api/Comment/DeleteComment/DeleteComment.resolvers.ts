import { combineResolvers } from 'graphql-resolvers';
import isAuthenticated from '../../Middleware/isAuthenticated';
import { DeleteCommentResponse, MutationDeleteCommentArgs } from '../../../generated/graphql';
import PostModel from '../../../models/Post.model';
import CommentModel from '../../../models/Comment.model';
import { errorName } from '../../../error/constants';

const resolver = {
  Mutation: {
    DeleteComment: combineResolvers(
      isAuthenticated,
      async (_: any, { postId, commentId }: MutationDeleteCommentArgs, { user }: any, ____: any): Promise<DeleteCommentResponse> => {
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

          if (findComment && post.comments) {
            // 포스트의 comments 컬럼에서 댓글아이디를 제거하는 단계 (삭제됨)
            post.comments = post.comments.filter((comment) => comment._id !== findComment._id);
            await post.save();
            await findComment.remove();
          }

          return {
            result: commentId,
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
