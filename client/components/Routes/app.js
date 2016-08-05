import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/login">登录</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})