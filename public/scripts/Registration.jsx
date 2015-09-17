'use strict';

var React        = require('react')

var Registration = React.createClass({
  render: function() {
    return (
      <div className="form-group">

        <h2 className="test"> User Registration </h2>
          <form>
          <label for="roleName">User Name :</label>
          <input type="text" className="form-control" placeholder="User name" ref="userName" />
          <label for="roleName">Password :</label>
          <input type="text" className="form-control" placeholder="Password" ref="password" />
          <br/>
          <input type="Next" value="Next" className="btn btn-default"/>
          </form>
      </div>
    );
  }
});

module.exports = Registration;