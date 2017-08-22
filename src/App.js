import React, { Component } from 'react';
import './App.css';

import UserList from './components/UserList';
import MathFunctions from './components/MathFunctions';

class App extends Component {
  render() {
    return (
        <div>
          <nav className="nav-extended">
            <div className="nav-wrapper">
              <a className="brand-logo">TBC test</a>
            </div>
            <div className="nav-content">
              <ul className="tabs tabs-transparent">
                <li className="tab"><a href="#section1">Users list</a></li>
                <li className="tab"><a href="#section2">Math functions</a></li>
              </ul>
            </div>
          </nav>
          <div id="section1" className="col s12"><UserList/></div>
          <div id="section2" className="col s12"><MathFunctions/></div>
        </div>
    );
  }
}

export default App;
