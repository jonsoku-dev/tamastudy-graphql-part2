import { gql } from '@apollo/client';

export default gql`
  mutation Register($input: RegisterInput!) {
    Register(input: $input) {
      result {
        email
        username
      }
    }
  }
`;
