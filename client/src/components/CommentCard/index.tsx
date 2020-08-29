import React, { FunctionComponent, useCallback, useState } from 'react';
import {
  Comment,
  CreateCommentDocument,
  CreateCommentMutation,
  DeleteCommentDocument,
  DeleteCommentMutation,
  GetCommentListDocument,
  MutationCreateCommentArgs,
  MutationDeleteCommentArgs,
  EditCommentMutation,
  MutationEditCommentArgs,
  EditCommentDocument,
} from '../../generated/graphql';
import styled from 'styled-components';
import Spinner from '../ui/Spinner';
import { useMutation } from '@apollo/client';
import { useRouteMatch } from 'react-router-dom';
import useInput from '../../hook/useInput';

type TParams = {
  postId: string;
};

const Wrapper = styled('div')`
  display: flex;
  align-items: center;
  margin: 24px 0;
`;
const User = styled('div')`
  margin-right: 32px;
`;
const Avatar = styled('div')`
  width: 30px;
  height: 30px;
  border-radius: 50%;
  overflow: hidden;
  > img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;
const Username = styled('div')`
  text-align: center;
`;
const Contents = styled('div')``;
const Desc = styled('div')`
  margin-bottom: 8px;
`;
const Date = styled('div')`
  font-size: 8px;
`;
const Buttons = styled('div')``;

const Input = styled('input')`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #eaeaea;
`;
const Edit = styled('div')``;

interface OwnProps {
  comment: Comment;
}

type Props = OwnProps;

// eslint-disable-next-line react/prop-types
const CommentCard: FunctionComponent<Props> = ({ comment }) => {
  const [toggle, setToggle] = useState(false);
  const router = useRouteMatch<TParams>();
  const [desc, onChangeDesc, clearDesc] = useInput(comment?.desc);
  const postId = router.params.postId;

  const [deleteCommentFn] = useMutation<DeleteCommentMutation, MutationDeleteCommentArgs>(DeleteCommentDocument, {
    onCompleted({ DeleteComment }) {
      if (DeleteComment) {
        // alert('댓글이 생성되었습니다. ');
      }
    },
    onError({ message }) {
      alert(message);
    },
    refetchQueries: [
      {
        query: GetCommentListDocument,
        variables: {
          postId: router.params.postId,
        },
      },
    ],
  });
  const [editCommentFn] = useMutation<EditCommentMutation, MutationEditCommentArgs>(EditCommentDocument, {
    onCompleted({ EditComment }) {
      if (EditComment) {
        clearDesc();
        setToggle(false);
      }
    },
    onError({ message }) {
      alert(message);
    },
    refetchQueries: [
      {
        query: GetCommentListDocument,
        variables: {
          postId: router.params.postId,
        },
      },
    ],
  });

  const onClickDeleteComment = useCallback(
    (commentId) => () => {
      if (window.confirm('댓글을 삭제하시겠습니까?')) {
        deleteCommentFn({
          variables: {
            postId: postId,
            commentId: commentId,
          },
        });
      }
    },
    [],
  );

  const onClickEditComment = useCallback(
    (commentId) => () => {
      if (!desc) {
        alert('댓글을 입력해주세요. ');
        return;
      }
      editCommentFn({
        variables: {
          commentId: commentId,
          postId: router.params.postId,
          input: {
            desc,
          },
        },
      });
    },
    [desc],
  );

  const onClickEditMode = useCallback(() => {
    setToggle(true);
  }, []);

  if (!comment) {
    return <Spinner />;
  }
  return (
    <Wrapper>
      <User>
        <Avatar>
          <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcSQ8_Tm5xlI_72eP7SilV188ppIkV_bla0jCQ&usqp=CAU" alt="test" />
        </Avatar>
        <Username>{comment?.user?.username}</Username>
      </User>
      {toggle ? (
        <Edit>
          <Input type="text" onChange={onChangeDesc} value={desc} />
          <Buttons>
            <button onClick={onClickEditComment(comment?._id)}>수정</button>
          </Buttons>
        </Edit>
      ) : (
        <Contents>
          <Desc>{comment?.desc}</Desc>
          <Date>{comment?.createdAt}</Date>
          <Buttons>
            <button onClick={onClickDeleteComment(comment?._id)}>삭제</button>
            <button onClick={onClickEditMode}>수정</button>
          </Buttons>
        </Contents>
      )}
    </Wrapper>
  );
};

export default CommentCard;
