'use strict';

var React = require('react')
var Registration = require('./Registration.jsx')
var PersonalDetails = require('./PersonalDetails.jsx')
var SecurityQuestions = require('./SecurityQuestions.jsx')
var Confirmation = require('./Confirmation.jsx')
var Success = require('./Success.jsx')
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
            step: 1
        }
    },
    showStep: function(){
      switch(this.state.step){
        case 1:
          return <Registration formFields={formFields}
                               nextStep={this.nextStep}
                               previousStep={this.previousStep}
                               saveValues={this.saveValues} />

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
                                    />
         case 5:
            return <Success/>
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
    render: function() {
        var style = {
            width: (this.state.step / 4 * 100) + '%'
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