import React from 'react';
import UserIndex from '../user/UserIndex';
import Home from '../main/Home';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import App from '../App';
import NotFound from '../main/NotFound';
import UserSummary from '../user/UserSummary';
import UserUpdate from '../user/UserUpdate';

export const MainPageRoute = (props) => {
  return <Switch>
    <Route path="/login"><LoginPage/></Route>
    <Route path="/main"><App/></Route>
    {/* If none of the previous routes render anything,
            this route acts as a fallback.

            Important: A route with path="/" will *always* match
            the URL because all URLs begin with a /. So that's
            why we put this one last of all */}
    <Route exact path="/"><LoginPage/></Route>
    <Route><NotFound/></Route>
  </Switch>;
};

export const LayoutContentRoute = (props) => {
  const {path} = useRouteMatch();
  return <Switch>
    <Route path={`${path}/userSummary`}>
      <UserSummary/>
    </Route>
    <Route exact path={`${path}/user`}>
      <UserIndex {...props}/>
    </Route>
    <Route exact path={`${path}/user/create`}>
      <UserUpdate action="create" {...props}/>
    </Route>
    <Route exact path={`${path}/user/update/:id`}>
      <UserUpdate action="update"/>
    </Route>
    <Route exact path={path}>
      <Home/>
    </Route>
    <Route><NotFound/></Route>
  </Switch>;
};