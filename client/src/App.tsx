import React from 'react';
import GlobalStyle from './css/globalStyles';
import AppRouter from './AppRouter';
import Header from './components/article/Header';
import Nav from './components/article/Nav';

interface Props {}

const App = (props: Props) => {
  return (
    <>
      <GlobalStyle />
      <Header />
      <Nav />
      <AppRouter />
    </>
  );
};

export default App;
