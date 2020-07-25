import React, { useState, FormEvent, ChangeEvent } from 'react';
import REGISTER from './RegisterQuery';
import RegisterPresenter from './RegisterPresenter';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';

interface Props {}

const initialFormData = {
  username: '',
  email: '',
  password: '',
};

const RegisterContainer = (props: Props) => {
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);

  const [registerFn, { loading, error }] = useMutation(REGISTER, {
    onCompleted({ Login }) {
      // 1. 토큰을 받아온다.

      // 2. 받아온 토큰을 로컬스토리지/세션/쿠키

      // 3. apollo cache 저장소에 작성한다.
      history.push('/');
    },
    onError(err) {
      console.log(err, 'from onError');
    },
  });

  const onSubmit = (event: FormEvent) => {
    event.preventDefault();
    registerFn({
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

  if (loading) return <div>회원가입 중입니다....</div>;
  if (error) return <div>회원가입 중에 에러가 발생하였습니다. </div>;

  return (
    <div>
      <RegisterPresenter formData={formData} onSubmit={onSubmit} onChange={onChange} />
    </div>
  );
};

export default RegisterContainer;
