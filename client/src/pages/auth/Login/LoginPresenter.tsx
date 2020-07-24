import React, { useState } from 'react';
import styled from 'styled-components';

interface Props {}

const LoginPresenter = (props: Props) => {
  const [isBlack, setIsBlack] = useState(false);
  const toggleChangeButtonColor = () => {
    setIsBlack(!isBlack);
  };
  return (
    <div>
      <Button isBlack={isBlack} onClick={toggleChangeButtonColor}>
        Button!
      </Button>
    </div>
  );
};

export default LoginPresenter;

const Button = styled('div')<{ isBlack: boolean }>`
  background-color: ${(props) => props.theme.colors.b200};
  ${(props) =>
    props.isBlack
      ? `
        background-color: black;
        color:white;
      `
      : `
        background-color: white;
        color:black;
      `}
`;
