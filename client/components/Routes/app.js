import React from 'react'
import NavLink from './NavLink'
var $ = require('jQuery');

export default React.createClass({
getInitialState: function() {
    return {
        userName: '',
        password: '',
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

  login: function(event) {
      var data = {"userName": this.state.userName, "password": this.state.password};
      $.ajax({
        url: 'http://127.0.0.1:8080/login',
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
        debugger;
         if(data === true) {
         window.location.href = "/#/homepage";
         }
        }.bind(this),
        error: function(xhr, status, err) {
          console.error(this.props.url, status, err.toString());
        }.bind(this)
      });
  },
  render() {
    return (
      <div>
        <p>账号登录</p>
        <div>
            <label>用户名:</label>
            <input name="userName" type="text" onChange={this.userNameChange} value={this.state.userName}></input>
        </div>
        <div>
            <label>密码:</label>
            <input name="password" type="text" onChange={this.passwordChange} value={this.state.password}></input>
        </div>
        <button onClick={this.login}> 登录 </button>
        <ul role="nav">
          <li><NavLink to="/login">忘记密码</NavLink></li>
          <li><NavLink to="/registry">免费注册</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})