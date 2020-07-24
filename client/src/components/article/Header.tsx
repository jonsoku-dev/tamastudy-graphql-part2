import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps, useHistory } from 'react-router-dom';
import { ApolloClient, useApolloClient, useQuery } from '@apollo/client';
import { IsUserLoggedInDocument } from '../../generated/graphql';

interface Props {}

const Header = (props: Props) => {
  const history = useHistory();
  const client: ApolloClient<any> = useApolloClient();
  const { data, loading } = useQuery(IsUserLoggedInDocument);

  const onClickLogout = () => {
    localStorage.removeItem('loginToken');

    client.writeQuery({
      query: IsUserLoggedInDocument,
      data: {
        isLoggedIn: !!localStorage.getItem('loginToken'),
      },
    });

    history.push('/');
  };

  if (loading) return null;

  console.log(data);
  const RenderLoggedIn = () => {
    return (
      <ul>
        <li>
          <StyledLink exact to={'/login'}>
            LOGIN
          </StyledLink>
        </li>
        <li>
          <StyledLink exact to={'/register'}>
            REGISTER
          </StyledLink>
        </li>
      </ul>
    );
  };

  const RenderLoggedOut = () => {
    return (
      <ul>
        <li>
          <button onClick={onClickLogout}>LOGOUT</button>
        </li>
      </ul>
    );
  };

  return (
    <Wrapper className="container">
      <LogoBox>
        <img src="https://i.dlpng.com/static/png/6637570_preview.png" alt="" />
      </LogoBox>
      <AuthNavBox>{data.isLoggedIn ? <RenderLoggedOut /> : <RenderLoggedIn />}</AuthNavBox>
    </Wrapper>
  );
};

export default Header;

const Wrapper = styled('div')`
  background-color: #dfe6e9;
  padding: ${(props) => props.theme.space * 2}px;
  display: flex;
  justify-content: space-between;
  align-items: center;
`;

const LogoBox = styled('div')`
  width: 60px;
  height: 60px;
  img {
    width: 100%;
    height: 100%;
    object-fit: fill;
  }
`;

const AuthNavBox = styled('nav')`
  ul {
    display: flex;
    justify-content: space-between;
  }
  li {
    margin-left: ${(props) => props.theme.space * 2}px;
  }
  a {
    font-weight: 600;
    padding: ${(props) => props.theme.space * 2}px;
  }
`;

const StyledLink = styled(NavLink)<NavLinkProps>`
  &.active {
    color: ${(props) => props.theme.colors.b300};
    font-weight: 600;
  }
`;
