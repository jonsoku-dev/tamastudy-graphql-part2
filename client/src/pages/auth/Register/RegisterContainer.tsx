import React, { useState, FormEvent, ChangeEvent } from 'react';
import RegisterPresenter from './RegisterPresenter';
import { useMutation } from '@apollo/client';
import { useHistory } from 'react-router-dom';
import { RegisterMutation, RegisterMutationVariables, RegisterDocument } from '../../../generated/graphql';

interface Props {}

const initialFormData = {
  username: '',
  email: '',
  password: '',
};

const RegisterContainer = (props: Props) => {
  const history = useHistory();
  const [formData, setFormData] = useState(initialFormData);

  const [registerFn, { loading, error }] = useMutation<RegisterMutation, RegisterMutationVariables>(RegisterDocument, {
    onCompleted({ Register }) {
      if(!Register){
        return
      }
      alert(`${Register.result.email}님 환영합니다. 로그인해주세요. `)
      history.push('/login');
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
