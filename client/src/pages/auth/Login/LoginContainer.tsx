import React, { useState, FormEvent, ChangeEvent } from 'react';
import LoginPresenter from './LoginPresenter';
import { useHistory } from 'react-router-dom';
import { useMutation, useApolloClient } from '@apollo/client';
import { LoginDocument, LoginMutationVariables, LoginMutation, IsLoggedInDocument } from '../../../generated/graphql';

interface Props {}

const initialFormData = {
  email: '',
  password: '',
};

const LoginContainer = (props: Props) => {
  const client = useApolloClient();
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);

  const [loginFn, { loading, error, data }] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
    onCompleted({ Login }) {
      if (!Login) {
        return;
      }
      window.sessionStorage.setItem('token', Login.token);
      client.writeQuery({
        query: IsLoggedInDocument,
        data: {
          isLoggedIn: true,
        },
      });

      history.push('/');
    },
    onError(err) {
      window.sessionStorage.removeItem('token');
      client.writeQuery({
        query: IsLoggedInDocument,
        data: {
          isLoggedIn: false,
        },
      });
    },
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    loginFn({
      variables: {
        input: formData,
      },
    });
  };

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setFormData({
      ...formData,
      [event.target.name]: event.target.value,
    });
  };

  if (loading) return <div>로그인 중입니다....</div>;

  return (
    <div>
      <LoginPresenter onSubmit={onSubmit} onChange={onChange} formData={formData} />
      {error && <div>로그인 중에 에러가 발생하였습니다. </div>}
    </div>
  );
};

export default LoginContainer;
