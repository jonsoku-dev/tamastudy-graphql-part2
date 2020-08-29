import React from 'react';
import { BrowserRouter, Switch, Route, Redirect } from 'react-router-dom';
import Login from './pages/auth/Login';
import Register from './pages/auth/Register';
import Header from './components/ui/Header';
// Post
import PostList from './pages/post/PostList';
import Post from './pages/post/Post';
import CreatePost from './pages/post/CreatePost';
import EditPost from './pages/post/EditPost';

interface Props {}

const AppRouter = (props: Props) => {
  return (
    <BrowserRouter>
      <Header />
      <Switch>
        <Route exact path={'/'} component={() => <div>Home</div>} />
        <Route exact path={'/login'} component={Login} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/posts'} component={PostList} />
        <Route exact path={'/post/create'} component={CreatePost} />
        <Route path={'/post/:postId/edit'} component={EditPost} />
        <Route path={'/post/:postId'} component={Post} />
        <Route exact path={'/register'} component={Register} />
        <Route exact path={'/404'} component={() => <div>Page Not Found</div>} />
        <Redirect from={'*'} to={'/404'} />
      </Switch>
    </BrowserRouter>
  );
};

export default AppRouter;
