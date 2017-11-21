import React from 'react';
import { Link } from 'react-router-dom';

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

export default Navbar;
