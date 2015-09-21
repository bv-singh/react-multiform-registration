var React = require('react')

var Success = React.createClass({
render : function(){
        return (
            <div>
                Your registration successful.

                <input type="text" value="Users List" className="btn btn-default"
                    onClick={this.props.usersList}/>

            </div>
        )
    }
})

module.exports = Success