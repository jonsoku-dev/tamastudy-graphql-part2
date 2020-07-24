import React from 'react';
import GlobalStyle from './css/globalStyles';
import AppRouter from './AppRouter';

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <GlobalStyle />
      <AppRouter />
    </>
  );
};

export default App;
