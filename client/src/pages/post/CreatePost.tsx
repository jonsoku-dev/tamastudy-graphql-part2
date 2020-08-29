import { useMutation, useQuery } from '@apollo/client';
import React, { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import Spinner from '../../components/ui/Spinner';
import { CreatePostDocument, CreatePostMutation, GetPostListDocument, IsLoggedInDocument, IsLoggedInQuery, MutationCreatePostArgs } from '../../generated/graphql';
import useInput from '../../hook/useInput';

interface Props {}

const CreatePost = (props: Props) => {
  const history = useHistory();
  const [title, onChangeTitle, clearTitle] = useInput('');
  const [desc, onChangeDesc, clearDesc] = useInput('');

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

  const [createPost, { loading }] = useMutation<CreatePostMutation, MutationCreatePostArgs>(CreatePostDocument, {
    onCompleted({ CreatePost }) {
      if (CreatePost) {
        clearTitle();
        clearDesc();
        history.push('/posts');
      }
    },
    onError({ message }) {
      alert(message);
    },
    refetchQueries: [
      {
        query: GetPostListDocument,
      },
    ],
  });

  const onSubmit = useCallback(
    (e: React.FormEvent) => {
      e.preventDefault();
      createPost({
        variables: {
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

  if (loading) {
    return <Spinner />;
  }

  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" name="title" value={title} placeholder={'제목을 입력해주세요. '} onChange={onChangeTitle} />
        <input type="text" name="desc" value={desc} placeholder={'본문을 입력해주세요. '} onChange={onChangeDesc} />
        <input type="submit" value="포스트 작성" />
      </form>
    </div>
  );
};

export default CreatePost;
