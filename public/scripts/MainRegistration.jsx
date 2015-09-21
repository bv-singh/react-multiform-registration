'use strict';

var React = require('react')
var Registration = require('./Registration.jsx')
var PersonalDetails = require('./PersonalDetails.jsx')
var SecurityQuestions = require('./SecurityQuestions.jsx')
var Confirmation = require('./Confirmation.jsx')
var Success = require('./Success.jsx')
var UsersList = require('./UsersList.jsx')
var assign = require('object-assign')

var formFields = {
    userName : null,
    password : null,
    email : null,
    address : null,
    country : null,
    dateOfBirth : null,
    securityQuestion : null,
    answer : null
}

var MainRegistration = React.createClass({
    getInitialState: function() {
        return {
            step: 1,
            userData : []
        }
    },
    showStep: function(){
      switch(this.state.step){
        case 6:
         return <UsersList userData = {this.state.userData}
                            invokeUserRegistration = {this.invokeUserRegistration}/>
        case 1:
          return <Registration formFields={formFields}
                               nextStep={this.nextStep}
                               previousStep={this.previousStep}
                               saveValues={this.saveValues}
                               invokeUserList = {this.invokeUserList}/>

        case 2:
          return <PersonalDetails formFields = {formFields}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues} />
        case 3:
          return <SecurityQuestions formFields = {formFields}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    saveValues={this.saveValues} />
        case 4:
          return <Confirmation formFields = {formFields}
                                    nextStep={this.nextStep}
                                    previousStep={this.previousStep}
                                    onUserSubmit={this.handleUsersSubmit}
                                    />
         case 5:
            return <Success usersList={this.invokeUserList} />
      }
    },
    saveValues : function(form_Fields){
      return function(){
        formFields = assign({},formFields, form_Fields)
      }.bind(this)()
    },
    nextStep : function(){
      this.setState({
        step : this.state.step + 1
      })
    },
    previousStep : function(){
        this.setState({
                step : this.state.step - 1
              })
    },
    handleUsersSubmit: function(user) {
            var userData = this.state.userData;
            console.log('userdata :' + userData)
            var newUserData = userData.concat([user]);
            this.setState({
                userData: newUserData
            });
            $.ajax({
                url: 'saveUsers.json',
                dataType: 'json',
                type: 'POST',
                data: user,
                success: function(userData) {
                    this.setState({
                        userData: newUserData
                    });
                }.bind(this),
                error: function(xhr, status, err) {
                    console.error('saveUsers.json', status, err.toString());
                }.bind(this)
            });
             this.nextStep();
        },
        invokeUserList : function(){
           this.setState({
             step: 6
           })
        },
        invokeUserRegistration : function(){
                   this.setState({
                     step: 1
                   })
                },
    render: function() {
        var style = {
            width: (this.state.step / 5 * 100) + '%'
        }
        return (
        <div className = "registration" >
            <main>
              <span><b>Step {this.state.step}</b></span>
              <div>
              <progress className = "progress" style = {style} > </progress>
              </div>
              {this.showStep()}
            </main>
        </div>
        );
    }
});

module.exports = MainRegistration;