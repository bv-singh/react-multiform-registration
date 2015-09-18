'use strict';

var React = require('react')

var SecurityQuestions = React.createClass({
render : function(){
    return (
        <div> <h3>Security Questions</h3>
            <label for="address">Question :</label>
              <input type="text" className="form-control" defaultValue={this.props.formFields.securityQuestion} ref="securityQuestion" />
              <label for="country">Answer :</label>
              <input type="text" className="form-control" defaultValue={this.props.formFields.answer} ref="answer" />
              <br/>
              <input type="Previous" value="Previous" className="btn btn-default" onClick={this.props.previousStep}/>&nbsp;
              <input type="text" value="Save & Continue" className="btn btn-default" onClick={this.nextStep}/>
        </div>
    )
    },
    nextStep : function(e){
        e.preventDefault()

        var securityQuestion = React.findDOMNode(this.refs.securityQuestion).value.trim();
        var answer = React.findDOMNode(this.refs.answer).value.trim();
        if (!securityQuestion || !answer ) {
            alert('Please enter all the input fields');
            return;
        }
        var data = {
                   securityQuestion : securityQuestion,
                   answer : answer
        }

    this.props.saveValues(data)
    this.props.nextStep()
    }
})

module.exports = SecurityQuestions