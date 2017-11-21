import React from 'react';
import { Link } from 'react-router-dom';

import { Navbar } from 'react-bootstrap';

function Navigation() {
  return (
    <Navbar>
      <div>
        <Navbar.Header>
          <Navbar.Brand>
            <a>Event Registration Form</a>
          </Navbar.Brand>
        </Navbar.Header>

        <Navbar.Text>
          <Link to={{ pathname: '/' }}> Registrations</Link>
        </Navbar.Text>
        <Navbar.Text>
          <Link to={{ pathname: '/new' }}> New Registration</Link>
        </Navbar.Text>
      </div>
    </Navbar>
  );
}

export default Navigation;
