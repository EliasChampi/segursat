import React, { Component } from 'react';
import Routes from './Routes';
import {  BrowserRouter } from "react-router-dom"
import { createBrowserHistory as appHistory } from "history"
import './index.css';

const browserHistory = appHistory();

class App extends Component {
  render() {
    return (
       <BrowserRouter history={browserHistory}>
         <Routes/>
       </BrowserRouter>
    );
  }
}

export default App;
