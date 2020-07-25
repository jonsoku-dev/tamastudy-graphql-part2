import React from 'react';
import AppRouter from './AppRouter';

interface Props {
  test?: string;
}

const App = (props: Props) => {
  return (
    <div>
      <AppRouter />
    </div>
  );
};

export default App;
