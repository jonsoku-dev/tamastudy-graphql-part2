import React from 'react';
import { useQuery } from '@apollo/client';
import styled from 'styled-components';
import { GetPostListDocument, GetPostListQuery } from '../../generated/graphql';
import PostCard from '../../components/PostCard';
import Spinner from '../../components/ui/Spinner';

const Wrapper = styled.div`
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  grid-gap: 24px;
  @media only screen and (min-width: 768px) {
    grid-template-columns: repeat(3, 1fr);
  }
  @media only screen and (min-width: 1024px) {
    grid-template-columns: repeat(4, 1fr);
  }
`;

interface Props {}

const PostList = (props: Props) => {
  const { data, loading, error } = useQuery<GetPostListQuery>(GetPostListDocument);

  if (loading) {
    return <Spinner />;
  }

  if (error) {
    return <div>{JSON.stringify(error)}</div>;
  }

  return (
    <Wrapper>
      {data?.GetPostList?.result?.map((post) => (
        <PostCard key={post._id} post={post} isPostList />
      ))}
    </Wrapper>
  );
};

export default PostList;
