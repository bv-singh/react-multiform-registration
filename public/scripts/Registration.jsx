'use strict';

var React = require('react')

var Registration = React.createClass({
  render: function() {
    return (
      <div className="form-group">
        <h3> User list </h3>  <input type="text" value="Users List" className="btn btn-default"
                                               onClick={this.props.invokeUserList}/>

        <h3 className="test"> User Registration </h3>
          <label for="userName">User Name :</label>
          <input type="text" className="form-control" defaultValue={this.props.formFields.userName} ref="userName" />
          <label for="password">Password :</label>
          <input type="text" className="form-control" defaultValue={this.props.formFields.password} ref="password" />
          <label for="email">Email :</label>
          <input type="text" className="form-control" defaultValue={this.props.formFields.email} ref="email" />
          <br/>
          <input type="Next" value="Save & Continue" className="btn btn-default" onClick={this.nextStep}/>
      </div>
    );
  },
  nextStep : function(e){
  e.preventDefault()

    var userName = React.findDOMNode(this.refs.userName).value.trim();
    var password = React.findDOMNode(this.refs.password).value.trim();
    var email = React.findDOMNode(this.refs.email).value.trim();
    if (!userName || !password || !email) {
      alert('Please enter all the input fields');
      return;
    }

    var data = {
      userName : userName,
      password : password,
      email : email,
    }
  this.props.saveValues(data),
  this.props.nextStep()
  }
});

module.exports = Registration;