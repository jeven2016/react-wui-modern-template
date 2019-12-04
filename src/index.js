//if you import the IE9 entry point, this will include IE10 and IE11 support.
//https://github.com/facebook/create-react-app/tree/master/packages/react-app-polyfill
// import 'babel-polyfill';
import "core-js/stable";
import "regenerator-runtime/runtime";
import 'react-app-polyfill/ie11';

import React from 'react';
import ReactDOM from 'react-dom';
import './wui-modern-0.5.1.min.css';
import './index.scss';
import * as serviceWorker from './serviceWorker';
import {BrowserRouter as Router} from 'react-router-dom';
import {MainPageRoute} from './common/RouteConfig';

// const history = createHashHistory();

const Template = (props) => {
  return <Router>
    <MainPageRoute/>
  </Router>;
};

ReactDOM.render(<Template/>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
