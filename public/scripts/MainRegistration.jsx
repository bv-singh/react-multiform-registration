'use strict';

var React = require('react')
var Registration = require('./Registration.jsx')

var StepCount = React.createClass({
    getInitialState: function() {
        return {
            step: 1
        }
    },
    render: function() {
        return ( <div> <b> Step: { this.state.step} </b> </div> );
    }
});

var MainRegistration = React.createClass({
    getInitialState: function() {
        return {
            step: 1
        }
    },
    render: function() {
        var style = {
            width: (this.state.step / 4 * 100) + '%'
        }
        return (
        <div className = "registration" >
            <main>
              <StepCount />
              <progress className = "progress" style = {style} > </progress>
              <Registration/>
            </main>
        </div>
        );
    }
});

module.exports = MainRegistration;