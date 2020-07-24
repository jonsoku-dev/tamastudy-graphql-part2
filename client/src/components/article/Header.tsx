import React from 'react';
import styled from 'styled-components';
import { NavLink, NavLinkProps } from 'react-router-dom';

interface Props {}

const Header = (props: Props) => {
  return (
    <Wrapper className="container">
      <LogoBox>
        <img src="https://i.dlpng.com/static/png/6637570_preview.png" alt="" />
      </LogoBox>
      <AuthNavBox>
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
      </AuthNavBox>
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
