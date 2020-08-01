import { gql } from '@apollo/client';

export default gql`
  mutation Login($input: LoginInput!) {
    Login(input: $input) {
      token
    }
  }
`;
