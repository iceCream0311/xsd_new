import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Link,NavLink} from 'react-router-dom'
import './css/App.css';
import Indexpage from './js/index/index';
import Main from './js/main/Main';

class App extends Component {
  render() {
    return (

    <div>
      <NavLink to="/">index</NavLink><br/>
      <NavLink to="/detail">detail</NavLink><br/>
      <NavLink to="/manager">manager</NavLink>
      <div id="container">
            {this.props.children}
      </div>
    </div>

    );
  }
}


export default App;

