import React, { Component } from 'react';

import { add_registration } from '../actions';

import { connect } from 'react-redux';

import { Table } from 'react-bootstrap';

class RegistrationList extends Component {
  render() {
    return (
      <div>
        <Table striped>
          <thead>
            <tr>
              <th>#</th>
              <th>name</th>
              <th>Email</th>
              <th>Food Choice</th>
              <th>Going to Sauna</th>
            </tr>
          </thead>
          <tbody>
            {this.props.users.map(function(user, i) {
              return (
                <tr key={i}>
                  <td>{i}</td>
                  <td>{user.name}</td>
                  <td>{user.email}</td>
                  <td>{user.foodChoice}</td>
                  <td>{user.goingToSauna ? 'Yes' : 'No'}</td>
                </tr>
              );
            })}
          </tbody>
        </Table>
      </div>
    );
  }
}

const mapStateToProps = state => ({
  users: state.users,
});

const mapDispatchToProps = {
  add_registration,
};

export default connect(mapStateToProps, mapDispatchToProps)(RegistrationList);
