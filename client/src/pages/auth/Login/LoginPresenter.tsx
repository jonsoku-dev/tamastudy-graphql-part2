import React from 'react';
import styled from 'styled-components';
import { Formik } from 'formik';
import { ApolloClient, useApolloClient, useMutation } from '@apollo/client';
import { IsUserLoggedInDocument, LoginDocument, LoginMutation, MutationLoginArgs } from '../../../generated/graphql';

interface Props {}

interface IFormData {
  email: string;
  password: string;
}

const initialFormData: IFormData = { email: '', password: '' };

const LoginPresenter = (props: Props) => {
  const client: ApolloClient<any> = useApolloClient();
  const [login, { loading }] = useMutation<LoginMutation, MutationLoginArgs>(LoginDocument, {
    onCompleted({ Login }) {
      if (Login?.token) {
        localStorage.setItem('loginToken', Login.token);
        client.writeQuery({
          query: IsUserLoggedInDocument,
          data: {
            isLoggedIn: !!localStorage.getItem('loginToken'),
          },
        });
      } else {
        alert('Fail get login token');
      }
    },
    refetchQueries: [{ query: IsUserLoggedInDocument }],
    onError(err) {
      console.error(err);
      alert('Login Error');
    },
  });

  if (loading) return <div>Loading !</div>;

  return (
    <Wrapper className="container">
      <Formik
        initialValues={initialFormData}
        validate={(values) => {
          const errors: Partial<{ email: string }> = {};
          if (!values.email) {
            errors.email = 'Required';
          } else if (!/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(values.email)) {
            errors.email = 'Invalid email address';
          }
          return errors;
        }}
        onSubmit={(values, { setSubmitting }) => {
          login({
            variables: {
              input: values,
            },
          });
        }}
      >
        {({
          values,
          errors,
          touched,
          handleChange,
          handleBlur,
          handleSubmit,
          isSubmitting,
          /* and other goodies */
        }) => (
          <form onSubmit={handleSubmit}>
            <input type="email" name="email" onChange={handleChange} onBlur={handleBlur} value={values.email} />
            {errors.email && touched.email && errors.email}
            <input type="password" name="password" onChange={handleChange} onBlur={handleBlur} value={values.password} />
            {errors.password && touched.password && errors.password}
            <button type="submit" disabled={isSubmitting}>
              Submit
            </button>
          </form>
        )}
      </Formik>
    </Wrapper>
  );
};

export default LoginPresenter;

const Wrapper = styled('div')``;

// const Button = styled('div')<{ isBlack: boolean }>`
//   background-color: ${(props) => props.theme.colors.b200};
//   ${(props) =>
//     props.isBlack
//       ? `
//         background-color: black;
//         color:white;
//       `
//       : `
//         background-color: white;
//         color:black;
//       `}
// `;
