import React, {Component} from 'react';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Home from './components/home/home';
import About from './components/about/about';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  render() {
    return (
      <Router>
        <div>
          <Route strict path="/" component={Home}></Route>
          <Route path="/about" render={() => <h1>About us. We are the famous SushAdi!</h1>}></Route>
          <Route path="/contact" children={() => <h1>Contact us please 714-722-5043!</h1>}></Route>
        </div>
      </Router>
    );
  }
}

export default App;
