import React, { FunctionComponent } from 'react';
import { Link } from 'react-router-dom';
import { useApolloClient, useQuery } from '@apollo/client';
import { IsLoggedInDocument, IsLoggedInQuery, IsLoggedInQueryResult } from '../../generated/graphql';

interface OwnProps {}

type Props = OwnProps;

const LoggedIn = () => {
  return (
    <nav>
      <div>
        <Link to={'/login'}>LOGIN</Link>
      </div>
      <div>
        <Link to={'/register'}>REGISTER</Link>
      </div>
    </nav>
  );
};

const LoggedOut = () => {
  const client = useApolloClient();

  const logoutFn = () => {
    sessionStorage.removeItem('token');
    client.writeQuery({
      query: IsLoggedInDocument,
      data: {
        isLoggedIn: false,
      },
    });
  };

  return (
    <nav>
      <div>
        <button onClick={logoutFn}>LOGOUT</button>
      </div>
    </nav>
  );
};

const Header: FunctionComponent<Props> = (props) => {
  const { data } = useQuery<IsLoggedInQuery>(IsLoggedInDocument);

  return <div>{data?.isLoggedIn ? <LoggedOut /> : <LoggedIn />}</div>;
};

export default Header;
