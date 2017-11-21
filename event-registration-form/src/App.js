import React, { Component } from 'react';
import { Route, Switch, Link } from 'react-router-dom';

import './App.css';

function Navbar() {
  return (
    <nav class="navbar navbar-default">
      <div class="container-fluid">
        <div class="navbar-header">
          <a class="navbar-brand" href="#/">
            Event Registration Form
          </a>
        </div>

        <ul class="nav navbar-nav navbar-right">
          <li>
            <Link to={{ pathname: '/' }}> Registrations</Link>
          </li>
          <li>
            <Link to={{ pathname: '/new' }}> New Registration</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
}

function Form() {
  return <p>form here</p>;
}

function List() {
  return <p>list here</p>;
}

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
