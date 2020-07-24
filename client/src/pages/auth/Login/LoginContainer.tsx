import React from 'react';
import { useMutation } from '@apollo/client';
import { LoginDocument, LoginMutation, LoginMutationVariables } from '../../../generated/graphql';
import LoginPresenter from './LoginPresenter';

interface Props {}

const LoginContainer = (props: Props) => {
  const [loginMutation] = useMutation<LoginMutation, LoginMutationVariables>(LoginDocument, {
    variables: {
      input: {
        email: 'clientTest@gmail.com',
        password: '1234',
      },
    },
    onCompleted({ Login }) {
      if (Login?.token) {
        localStorage.setItem('loginToken', Login?.token);
      }
    },
    onError(error) {
      console.log(error);
    },
  });

  return (
    <div>
      <LoginPresenter />
      <button onClick={() => loginMutation()}>Login~</button>
    </div>
  );
};

export default LoginContainer;
