import React, { FormEvent, ChangeEvent } from 'react';

interface Props {
  formData: any;
  onSubmit: (event: FormEvent) => void;
  onChange: (event: ChangeEvent<HTMLInputElement>) => void;
}

const LoginPresenter = ({ onSubmit, onChange, formData }: Props) => {
  return (
      <div>
        <form onSubmit={onSubmit}>
          <div>
            <label htmlFor="">email</label>
            <input onChange={onChange} type="email" name={'email'} value={formData.email} />
          </div>
          <div>
            <label htmlFor="">password</label>
            <input onChange={onChange} type="password" name={'password'} value={formData.password} />
          </div>
          <div>
            <button type="submit">로그인</button>
          </div>
        </form>
      </div>
  );
};

export default LoginPresenter;
