import React, { Component } from 'react';
import {BrowserRouter as Router,Route,Switch,Link} from 'react-router-dom';
import App from '../../App';
class Main extends Component {
  render() {
    return (
 <Router>
    <div>
      <ul>
        <li><Link to="/app">aaa</Link></li>
      </ul>

      <hr/>

      <Route path="/app" component={App}/>
    </div>
  </Router>
    );
  }
}

export default Main;