import React from 'react';
import { BrowserRouter, Redirect, Route, Switch } from 'react-router-dom';
import Nav from './components/article/Nav';
import Header from './components/article/Header';
import NotFoundPage from './pages/NotFoundPage';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Profile from './pages/auth/Profile';

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Header />
      <Nav />
      <Switch>
        <Route path={'/'} exact={true} component={() => <div>Home</div>} />
        <Route path={'/login'} component={Login} />
        <Route path={'/register'} component={Register} />
        <Route path={'/profile'} component={Profile} />
        <Route path={'/404'} exact={true} component={NotFoundPage} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
