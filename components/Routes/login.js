
import React from 'react'

export default React.createClass({
  render() {
    return (
    <form>
    	<div>
    	    <div>
	    		<label htmlFor="userName">用户名：</label>
	    		<input name="userName"></input>
			</div>
			<div>
	    		<label htmlFor="password">登录密码：</label>
	    		<input name="userName"></input>
    		</div>	
    		<button>登录</button>
    	</div>
    </form>	
  		)
  }
})