import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './css/App.css';
import Indexpage from './js/index/index';
import Main from './js/main/Main';
class App extends Component {
  render() {
    return (
       <Router>
    <div>
      <ul>
        <li><Link to="/">Home</Link></li>
        <li><Link to="/main">main</Link></li>
      </ul>

      <hr/>

      <Route exact path="/" component={Indexpage}/>
      <Route path="/main" component={Main}/>
    </div>
  </Router>
    );
  }
}

export default App;

