var React = require('react')

var UsersList = React.createClass({
    render : function(){
        return (
            <div>
            Please click Signup for user Registration

            <input type="signup" value="Signup" className="btn btn-default" onClick={this.props.invokeUserRegistration}/>
            <br/>

            User list:
            {
            this.state.userData.map(function(listOfValues){
                        return <li>{listOfValues.formFields.userName}&nbsp; {listOfValues.formFields.password}&nbsp; {listOfValues.formFields.email} &nbsp;{listOfValues.formFields.securityQuestion}</li>;
                      })
            }
            </div>
            )
    },

    getInitialState : function(){
        return {
        userData : []
        }
    },
    componentDidMount: function() {
                    this.loadUsersFromServer();

                    setInterval(this.loadUsersFromServer, '3000');
                },
    loadUsersFromServer: function() {
    console.log('userData from the load method:'+ this.state.userData)
            $.ajax({
                url: 'getUsersList.json',
                dataType: 'json',
                cache: false,
                success: function(userData) {
                    this.setState({
                        userData: userData
                    });

                }.bind(this),
                error: function(xhr, status, err) {
                    console.error('getUsersList.json', status, err.toString());
                }.bind(this)
            });
        }
})

module.exports = UsersList