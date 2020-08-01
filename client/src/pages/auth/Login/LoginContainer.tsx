import React, { useState, FormEvent, ChangeEvent } from 'react';
import LOGIN from './LoginQuery'
import LoginPresenter from './LoginPresenter';
import { useHistory } from 'react-router-dom';
import { useMutation } from '@apollo/client';

interface Props {}

const initialFormData = {
    email: '',
    password: '',
};

const LoginContainer = (props: Props) => {
    const history = useHistory();
    const [formData, setFormData] = useState(initialFormData);

    const [loginFn, { loading, error, data }] = useMutation(LOGIN, {
        onCompleted({ Login }) {
            window.sessionStorage.setItem('token', Login.token)
            history.push("/")
        },
        onError(err) {
            alert('error !')
            window.sessionStorage.removeItem('token')
        },
    })

    const onSubmit = (event: FormEvent) => {
        event.preventDefault();
        loginFn({
            variables : {
                input: formData
            }
        })
    };

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        setFormData({
            ...formData,
            [event.target.name]: event.target.value,
        });
    };

    if (loading) return <div>로그인 중입니다....</div>;
    if (error) return <div>로그인 중에 에러가 발생하였습니다. </div>;
  return (
    <div>
      <LoginPresenter
          onSubmit={onSubmit}
          onChange={onChange}
          formData={formData}
      />
    </div>
  );
};

export default LoginContainer;
