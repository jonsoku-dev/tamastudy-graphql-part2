import React from 'react';
import { Link } from 'react-router-dom';
import { Post } from '../generated/graphql';

import styled, { css } from 'styled-components';

const styles = css`
  margin: 0;
  padding: 16px;
  border: 1px solid #eaeaea;
  border-radius: 16px;
  box-sizing: border-box;
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const ListWrapper = styled(Link)`
  ${styles}
  text-decoration: none;
  color: inherit;
`;

const DetailWrapper = styled('div')`
  ${styles}
`;

interface Props {
  post?: Post;
  isPostList?: boolean;
  isLoggedIn?: boolean;
}

const PostCard = ({ post, isPostList = false, isLoggedIn }: Props) => {
  if (!post) {
    return <div>Post가 존재하지 않습니다. </div>;
  }
  return isPostList ? (
    <ListWrapper to={`/post/${post._id}`}>
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
    </ListWrapper>
  ) : (
    <DetailWrapper>
      <h2>{post.title}</h2>
      <p>{post.desc}</p>
      {isLoggedIn && <Link to={`/post/${post._id}/edit`}>수정하기</Link>}
      <Link to={`/posts`}>포스트목록</Link>
    </DetailWrapper>
  );
};

export default PostCard;
