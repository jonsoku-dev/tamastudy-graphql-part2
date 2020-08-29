import React from 'react';
import { useQuery } from '@apollo/client';
import { GetPostDocument, GetPostQuery, IsLoggedInDocument, IsLoggedInQuery, QueryGetPostArgs } from '../../generated/graphql';
import { useRouteMatch } from 'react-router-dom';
import PostCard from '../../components/PostCard';
import Spinner from '../../components/ui/Spinner';
import CommentList from '../../components/CommentList';
import CommentForm from '../../components/CommentForm';

interface Props {}

type TParams = {
  postId: string;
};

const Post = (props: Props) => {
  const router = useRouteMatch<TParams>();

  const postId = router.params.postId;

  const { data, loading, error } = useQuery<GetPostQuery, QueryGetPostArgs>(GetPostDocument, {
    variables: {
      postId,
    },
  });

  const { data: isLoggedInData } = useQuery<IsLoggedInQuery>(IsLoggedInDocument);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  const post = data?.GetPost?.result;
  const isLoggedIn = isLoggedInData?.isLoggedIn;

  return (
    <>
      <PostCard post={post} isLoggedIn={isLoggedIn} />
      <CommentForm />
      <CommentList />
    </>
  );
};

export default Post;
