require("../css/style.css");

import React, { Component } from 'react';
import { render } from 'react-dom'

import { DefaultRoute, Link, Route, Router, hashHistory } from 'react-router';


import RegistryHandler from '../components/Routes/registryPage.jsx';
import HomePageHandler from '../components/Routes/homepage.jsx';
import App from '../components/Routes/app.js';

const routes = (<Router history={hashHistory}>
    <Route path="/" component={App}/>
    <Route path="/registry" component={RegistryHandler}/>
    <Route path="/homepage" component={HomePageHandler}/>
  </Router>)

render(routes, document.getElementById('react'));