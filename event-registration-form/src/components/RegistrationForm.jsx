import { add_registration } from '../actions';

import React, { Component } from 'react';

import { connect } from 'react-redux';

import {
  FormGroup,
  ControlLabel,
  FormControl,
  HelpBlock,
  Checkbox,
} from 'react-bootstrap';

function FieldGroup({ id, label, help, ...props }) {
  return (
    <FormGroup controlId={id}>
      <ControlLabel>{label}</ControlLabel>
      <FormControl {...props} />
      {help && <HelpBlock>{help}</HelpBlock>}
    </FormGroup>
  );
}

class RegistrationForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: '',
      email: '',
      foodChoice: 'Fish',
      goingToSauna: false,
    };

    this.handleInputChange = this.handleInputChange.bind(this);
  }

  handleInputChange(event) {
    console.log(this.state);
    const name = event.target.type === 'checkbox' ? 'goingToSauna' : event.target.id;
    const value =
      event.target.type === 'checkbox' ? event.target.checked : event.target.value;
    this.setState({
      [name]: value,
    });
  }

  render() {
    return (
      <div>
        <div>
          <strong>Ilmoittautumislomake</strong>
        </div>
        <div>
          <div>
            <FieldGroup
              id="name"
              type="text"
              label="Name:"
              placeholder="name"
              onChange={this.handleInputChange}
            />

            <FieldGroup
              id="email"
              type="email"
              label="Email:"
              placeholder="email"
              onChange={this.handleInputChange}
            />

            <FormGroup controlId="foodChoice" onChange={this.handleInputChange}>
              <ControlLabel>Food Choice:</ControlLabel>
              <FormControl componentClass="select" placeholder="select">
                <option>Fish</option>
                <option>Meat</option>
                <option>Vegan</option>
              </FormControl>
            </FormGroup>

            <Checkbox
              label="Going to sauna"
              onChange={this.handleInputChange}
              key="goingToSauna"
            >
              Going to sauna
            </Checkbox>
          </div>
          <button
            onClick={() => {
              this.props.add_registration(this.state);
            }}
          >
            Submit
          </button>
        </div>
      </div>
    );
  }
}
export default connect(
  state => {
    return {};
  },
  { add_registration }
)(RegistrationForm);
