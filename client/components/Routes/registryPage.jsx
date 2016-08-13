import React from 'react'
var $ = require('jQuery');

export default React.createClass({
  getInitialState: function() {
    return {
        userName: '',
        password: '',
        phoneNumber: ''
    };
  },

  userNameChange: function(e) {
    this.setState({
      userName: e.target.value
    })
  },
  passwordChange: function(e) {
    this.setState({
      password: e.target.value
    })
  },
  phoneNumberChange: function(e) {
    this.setState({
      phoneNumber: e.target.value
    })
  },

   createAccountFromServer: function(event) {
              var data = {"userName": this.state.userName, "password": this.state.password, "phoneNumber": this.state.phoneNumber};
              $.ajax({
                url: 'http://127.0.0.1:8080/user',
                dataType: 'json',
                headers: {
                    'Accept': 'application/json',
                    'Content-Type': 'application/json'
                },
                method: 'POST',
                data: JSON.stringify(data),
                cache: false,
                xhrFields: { withCredentials: true },
                success: function(data) {
                  this.setState({data: data});
                }.bind(this),
                error: function(xhr, status, err) {
                  console.error(this.props.url, status, err.toString());
                }.bind(this)
              });
      },

    render: function() {
      return (
      	<div>
      	    <div>
                <label>用户名:</label>
                <input name="userName" type="text" onChange={this.userNameChange} value={this.state.userName}></input>
            </div>
            <div>
                <label>密码:</label>
                <input name="password" type="text" onChange={this.passwordChange} value={this.state.password}></input>
            </div>
            <div>
                <label>手机号:</label>
                <input name="phoneNumber" type="text" onChange={this.phoneNumberChange} value={this.state.phoneNumber}></input>
            </div>
            <button onClick={this.createAccountFromServer}> 提交
            </button>
       </div>
    )
  }
});


