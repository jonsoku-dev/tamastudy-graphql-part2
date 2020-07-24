import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/auth/Login';
import Profile from './pages/auth/Profile';

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Switch>
        <Route path={'/'} exact={true} component={() => <div>Home</div>} />
        <Route path={'/login'} component={Login} />
        <Route path={'/profile'} component={Profile} />
        <Route path={'/404'} exact={true} component={NotFoundPage} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
