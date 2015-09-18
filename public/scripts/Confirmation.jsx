'use strict';

var React = require('react')

var Confirmation = React.createClass({
render : function(){
    return (
    <div> User Name : {this.props.formFields.userName}<br/>
    Password : {this.props.formFields.password}<br/>
    Email : {this.props.formFields.email}<br/>
    Address : {this.props.formFields.address}<br/>
    Country : {this.props.formFields.country}<br/>
    Date Of Birth : {this.props.formFields.dateOfBirth}<br/>
    Security Question : {this.props.formFields.securityQuestion}<br/>
    Answer : {this.props.formFields.answer}
    <br/>
    <input type="Previous" value="Previous" className="btn btn-default" onClick={this.props.previousStep}/>&nbsp;
    <input type="text" value="Confirm" className="btn btn-default" onClick={this.nextStep}/>
    </div>
    )
    },
    nextStep : function(e){
        e.preventDefault()
        this.props.nextStep();
    }
})

module.exports = Confirmation