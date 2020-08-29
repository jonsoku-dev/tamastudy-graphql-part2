import React, { FunctionComponent, useCallback } from 'react';
import { CreateCommentDocument, CreateCommentMutation, GetCommentListDocument, GetPostListDocument, MutationCreateCommentArgs } from '../../generated/graphql';
import { useMutation } from '@apollo/client';
import useInput from '../../hook/useInput';
import { useRouteMatch } from 'react-router-dom';
import styled from 'styled-components';

const Wrapper = styled('div')`
  margin: 32px 0;
`;
const Title = styled('h4')`
  margin-bottom: 8px;
`;
const Form = styled('form')``;
const Input = styled('input')`
  width: 100%;
  box-sizing: border-box;
  padding: 8px;
  outline: none;
  border-radius: 8px;
  border: 1px solid #eaeaea;
`;

type TParams = {
  postId: string;
};

interface OwnProps {}

type Props = OwnProps;

const CommentForm: FunctionComponent<Props> = (props) => {
  const router = useRouteMatch<TParams>();
  const [desc, onChangeDesc, clearDesc] = useInput('');

  const [createCommentFn] = useMutation<CreateCommentMutation, MutationCreateCommentArgs>(CreateCommentDocument, {
    onCompleted({ CreateComment }) {
      if (CreateComment) {
        clearDesc();
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

  const onSubmit = useCallback(
    (e) => {
      e.preventDefault();
      if (!desc) {
        alert('댓글을 입력해주세요. ');
        return;
      }
      createCommentFn({
        variables: {
          postId: router.params.postId,
          input: {
            desc,
          },
        },
      });
    },
    [router.params.postId, desc],
  );

  return (
    <Wrapper>
      <Title>댓글을 입력해주세요 ...</Title>
      <Form onSubmit={onSubmit}>
        <Input type="text" onChange={onChangeDesc} value={desc} />
      </Form>
    </Wrapper>
  );
};

export default CommentForm;
