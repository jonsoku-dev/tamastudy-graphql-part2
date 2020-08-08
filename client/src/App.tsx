import React from 'react';
import AppRouter from './AppRouter';
import useAuthenticate from './hook/useAuthenticate';

interface Props {
  test?: string;
}

const App = (props: Props) => {
  useAuthenticate();

  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
