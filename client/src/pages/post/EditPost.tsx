import { useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useEffect } from 'react';
import { useHistory, useRouteMatch } from 'react-router-dom';
import Spinner from '../../components/ui/Spinner';
import {
  EditPostDocument,
  EditPostMutation,
  GetPostDocument,
  GetPostListDocument,
  GetPostQuery,
  IsLoggedInDocument,
  IsLoggedInQuery,
  MutationEditPostArgs,
  QueryGetPostArgs,
} from '../../generated/graphql';
import useInput from '../../hook/useInput';

type TParams = {
  postId: string;
};

interface Props {}

const EditPost = (props: Props) => {
  const router = useRouteMatch<TParams>();
  const history = useHistory();
  const [title, onChangeTitle, clearTitle, setTitle] = useInput('');
  const [desc, onChangeDesc, clearDesc, setDesc] = useInput('');

  const { data: isLoggedInData } = useQuery<IsLoggedInQuery>(IsLoggedInDocument, {
    onCompleted({ isLoggedIn }) {
      if (!isLoggedIn) {
        history.push('/posts');
      }
    },
    onError({ message }) {
      alert(message);
      history.push('/posts');
    },
  });

  useQuery<GetPostQuery, QueryGetPostArgs>(GetPostDocument, {
    variables: {
      postId: router.params.postId,
    },
    onCompleted({ GetPost }) {
      if (GetPost) {
        setTitle(GetPost.result.title);
        setDesc(GetPost.result.desc);
      }
    },
    onError({ message }) {
      alert(message);
      history.push('/posts');
    },
  });

  const [EditPost, { loading: EditLoading }] = useMutation<EditPostMutation, MutationEditPostArgs>(EditPostDocument, {
    onCompleted({ EditPost }) {
      if (EditPost) {
        clearTitle();
        clearDesc();
        history.push(`/post/${EditPost.result._id}`);
      }
    },
    onError({ message }) {
      alert(message);
    },
    refetchQueries: [
      {
        query: GetPostDocument,
        variables: {
          postId: router.params.postId,
        },
      },
    ],
  });

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      EditPost({
        variables: {
          postId: router.params.postId,
          input: {
            title,
            desc,
          },
        },
      });
    },
    [title, desc],
  );

  useEffect(() => {
    if (!isLoggedInData?.isLoggedIn) {
      history.push('/posts');
    }
  }, [isLoggedInData]);

  if (EditLoading) {
    return <Spinner />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" value={title} placeholder={'제목을 입력해주세요. '} onChange={onChangeTitle} />
        <input type="text" name="desc" value={desc} placeholder={'본문을 입력해주세요. '} onChange={onChangeDesc} />
        <input type="submit" value="포스트 수정" />
      </form>
    </div>
  );
};

export default EditPost;
