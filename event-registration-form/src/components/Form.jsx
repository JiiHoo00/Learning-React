import React, { Component } from 'react';

class Form extends Component{
  render() {
    return (
      <div class="panel panel-default">
        <div class="panel-heading">
          <strong>Ilmoittautumislomake</strong>
        </div>
        <div class="panel-body">
          <form role="form">
            <div class="form-group">
              <label for="nimi">Name:</label>
              <input type="text" class="form-control" id="nimi" placeholder="name" />

              <label for="email">Email:</label>
              <input type="email" class="form-control" id="email" placeholder="email" />

              <label for="ruoka">Food Choice:</label>
              <select class="form-control" id="ruoka" ng-model="formdata.ruoka">
                <option>Fish</option>
                <option>Meat</option>
                <option>Vegan</option>
              </select>
              <div class="checkbox">
                <label>
                  <input type="checkbox" /> Going to sauna
                </label>
              </div>
            </div>
            <button type="submit" class="btn btn-default">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }
}
export default Form;
