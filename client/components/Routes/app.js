import React from 'react'
import NavLink from './NavLink'

export default React.createClass({
  render() {
    return (
      <div>
        <ul role="nav">
          <li><NavLink to="/createAccount">注册用户</NavLink></li>
        </ul>
        {this.props.children}
      </div>
    )
  }
})