import client from '../client';
import { useQuery } from '@apollo/client';
import { GetUserDocument, GetUserResponse, IsLoggedInDocument } from '../generated/graphql';

const useAuthenticate = () => {
  useQuery<GetUserResponse>(GetUserDocument, {
    onCompleted(data) {
      if (data) {
        client.writeQuery({
          query: IsLoggedInDocument,
          data: {
            isLoggedIn: true,
          },
        });
      }
    },
    onError(error) {
      sessionStorage.removeItem('token');
      client.writeQuery({
        query: IsLoggedInDocument,
        data: {
          isLoggedIn: false,
        },
      });
    },
    skip: !sessionStorage.getItem('token'),
  });
};

export default useAuthenticate;
