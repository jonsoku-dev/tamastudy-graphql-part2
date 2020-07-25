import React, { ChangeEvent, FormEvent } from 'react';

interface Props {
  formData: any;
  onSubmit: (event: FormEvent) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const RegisterPresenter = ({ formData, onSubmit, onChange }: Props) => {
  return (
    <div>
      <form onSubmit={onSubmit}>
        <div>
          <label htmlFor="">useranme</label>
          <input onChange={onChange} type="text" name={'username'} value={formData.username} />
        </div>
        <div>
          <label htmlFor="">email</label>
          <input onChange={onChange} type="email" name={'email'} value={formData.email} />
        </div>
        <div>
          <label htmlFor="">password</label>
          <input onChange={onChange} type="password" name={'password'} value={formData.password} />
        </div>
        <div>
          <button type="submit">회원가입</button>
        </div>
      </form>
    </div>
  );
};

export default RegisterPresenter;
