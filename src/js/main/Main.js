import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import App from '../../App';
class Main extends Component {
  render() {
    return (
        <div>
          <ul>
            <li><Link to="/manager">Manager</Link></li>
          </ul>
          <div id="mancontainer">
            {this.props.children}
        </div>
        </div>
    );
  }
}

export default Main;