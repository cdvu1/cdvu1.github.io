import React, { Component } from 'react';
import logo from './logo.svg';
//import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <nav>
            <div class="nav-wrapper blue-grey lighten-4">
              <a href="#" class="brand-logo ml-2">ceciliadvu</a>
              <ul id="nav-mobile" class="right hide-on-med-and-down">
                <li><a href="sass.html">About Me</a></li>
                <li><a href="badges.html">Projects</a></li>
                <li><a href="collapsible.html">JavaScript</a></li>
              </ul>
            </div>
          </nav>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
