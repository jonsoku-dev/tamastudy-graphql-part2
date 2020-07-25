import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route exact path={'/'} component={() => <div>Home</div>} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/404'} component={() => <div>Page Not Found</div>} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
