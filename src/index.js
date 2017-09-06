import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import './css/index.css';
import './css/App.css';
import App from './App';
import Indexpage from './js/index/index';
import Detail from './js/index/detail';
import Main from './js/main/Main';
import Manager from './js/main/Manager';
let setFontSize = () =>{
    let html = document.documentElement;
    let fontSize = html.clientWidth / 16;
    html.style.fontSize = fontSize + 'px';
    document.addEventListener('DOMContentLoaded', setFontSize, false);
}
setFontSize()
ReactDOM.render((
 <Router>
    <div>
      <App>
        <Switch>
          <Route exact path="/" component={Indexpage}/>
          <Route path="/detail" component={Detail}/>
        </Switch>
      </App>
      <Main>
        <Switch>
          <Route path="/Manager" component={Manager}/>
        </Switch>
      </Main>
    </div>
  </Router>
  ),document.getElementById('root'));
