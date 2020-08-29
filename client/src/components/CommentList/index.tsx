import React, { FunctionComponent } from 'react';
import { useRouteMatch } from 'react-router-dom';
import { useQuery } from '@apollo/client';
import { GetCommentListDocument, GetCommentListQuery, QueryGetCommentListArgs } from '../../generated/graphql';
import Spinner from '../ui/Spinner';
import CommentCard from '../CommentCard';

type TParams = {
  postId: string;
};

interface OwnProps {}

type Props = OwnProps;

const CommentList: FunctionComponent<Props> = (props) => {
  const router = useRouteMatch<TParams>();
  const postId = router.params.postId;

  const { data, loading, error } = useQuery<GetCommentListQuery, QueryGetCommentListArgs>(GetCommentListDocument, {
    variables: {
      postId,
    },
  });

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  const commentList = data?.GetCommentList?.result;

  if (commentList?.length === 0) {
    return <div>댓글이 존재하지 않습니다...</div>;
  }

  return <div>{commentList && commentList.map((comment) => <CommentCard key={comment._id} comment={comment} />)}</div>;
};

export default CommentList;
