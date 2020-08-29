import React from 'react';
import styled, { keyframes } from 'styled-components';

const rotation = keyframes`
  from {
      transform: rotate(0deg)
  }
  to {
      transform : rotate(360deg)
  }
`;

const Wrapper = styled.div`
  position: fixed;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  width: 100vw;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Item = styled.div`
  width: 80px;
  height: 80px;
  border-radius: 50%;
  border: 3px solid black;
  border-top: none;
  border-right: none;
  margin: 8px;
  animation: ${rotation} 1s linear infinite;
`;

interface Props {}

const Spinner = (props: Props) => {
  return (
    <Wrapper>
      <Item />
    </Wrapper>
  );
};

export default Spinner;
