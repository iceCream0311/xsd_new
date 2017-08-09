import React, { Component } from 'react';
import logo from './logo.svg';
import {BrowserRouter as Router, Route,Link} from 'react-router-dom'
import './css/App.css';
class App extends Component {
  render() {
    return (

        <div id="container">
        <Link to="/">Rendering with React</Link>
        <Link to="/main">Rendering</Link>
            {this.props.children}
        </div>
    );
  }
}

export default App;

