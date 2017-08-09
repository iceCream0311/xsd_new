import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch} from 'react-router-dom';
import './css/index.css';
import './css/App.css';
import App from './App';
import Indexpage from './js/index/index';
import Main from './js/main/Main';
let setFontSize = () =>{
    let html = document.documentElement;
    let fontSize = html.clientWidth / 16;
    html.style.fontSize = fontSize + 'px';
    document.addEventListener('DOMContentLoaded', setFontSize, false);
}
setFontSize()
ReactDOM.render((
  <Router>
    <App>
      <Switch>
        <Route exact path="/" component={Indexpage} />
        <Route path="/main" component={Main} />
      </Switch>
    </App>

  </Router>
  ),document.getElementById('root'));