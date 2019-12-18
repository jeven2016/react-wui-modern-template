import React from 'react';
import UserIndex from '../user/UserIndex';
import Home from '../main/Home';
import {Route, Switch, useRouteMatch} from 'react-router-dom';
import LoginPage from '../login/LoginPage';
import App from '../App';
import NotFound from '../main/NotFound';
import UserSummary from '../user/UserSummary';
import UserUpdate from '../user/UserUpdate';
import {RouteLoader} from 'react-wui-modern';

const progressStyle = {
  top: '4rem', height: '3px', zIndex: '1000',
};

const barStyle = {
  background: '#27AE60',
};

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
    <RouteLoader route={Route} path={`${path}/userSummary`}
                 progressStyle={progressStyle} barStyle={barStyle}>
      <UserSummary/>
    </RouteLoader>
    <RouteLoader route={Route} exact path={`${path}/user`}
                 progressStyle={progressStyle} barStyle={barStyle}>
      <UserIndex {...props}/>
    </RouteLoader>
    <RouteLoader route={Route} exact path={`${path}/user/create`}
                 progressStyle={progressStyle} barStyle={barStyle}>
      <UserUpdate action="create" {...props}/>
    </RouteLoader>
    <RouteLoader route={Route} exact path={`${path}/user/update/:id`}
                 progressStyle={progressStyle} barStyle={barStyle}>
      <UserUpdate action="update"/>
    </RouteLoader>
    <RouteLoader route={Route} exact path={path} progressStyle={progressStyle}
                 barStyle={barStyle}>
      <Home/>
    </RouteLoader>
    <RouteLoader route={Route}
                 progressStyle={progressStyle}
                 barStyle={barStyle}><NotFound/></RouteLoader>
  </Switch>;
};