import React, { Component } from 'react';
import { Route, Switch } from 'react-router-dom';

import Navbar from './Navbar';
import Form from './Form';
import List from './List';

import './App.css';

class App extends Component {
  render() {
    return (
      <div className="App">
        <header>
          <Navbar />
        </header>
        <Switch>
          <Route exact={true} path="/" component={List} />
          <Route path="/new" component={Form} />
        </Switch>
      </div>
    );
  }
}

export default App;
