'use strict';

var React = require('react')

var PersonalDetails = React.createClass({
render : function(){
    return (
            <div> <h3>Personal Details </h3>
                <label for="address">Address :</label>
                  <input type="text" className="form-control" defaultValue={this.props.formFields.address} ref="address" />
                  <label for="country">Country :</label>
                  <input type="text" className="form-control" defaultValue={this.props.formFields.country} ref="country" />
                  <label for="dateOfBirth">Date of Birth :</label>
                  <input type="text" className="form-control" defaultValue={this.props.formFields.dateOfBirth} ref="dateOfBirth" />
                  <br/>
                  <input type="Previous" value="Previous" className="btn btn-default" onClick={this.props.previousStep}/> &nbsp;
                  <input type="text" value="Save & Continue" className="btn btn-default" onClick={this.nextStep}/>
            </div>
    )
    },
    nextStep : function(e){
        e.preventDefault()
        var address = React.findDOMNode(this.refs.address).value.trim();
        var country = React.findDOMNode(this.refs.country).value.trim();
        var dateOfBirth = React.findDOMNode(this.refs.dateOfBirth).value.trim();
            if (!address || !country || !dateOfBirth) {
              alert('Please enter all the input fields');
              return;
        }

        var data = {
            address : address,
            country : country,
            dateOfBirth : dateOfBirth,
        }
        this.props.saveValues(data),
        this.props.nextStep()
    }
})


module.exports = PersonalDetails