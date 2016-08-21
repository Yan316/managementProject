require("../../css/dish.css");
import React from 'react'
import { render } from 'react-dom'
import NavLink from './NavLink'
import PictureSelect from '../base/PictureSelect'
import MenuItem from '../dish/dishItem'
var $ = require('jQuery');

export default React.createClass({
    render() {
        return (
        	<div className="pageContent container">
		        <div className="columns">
		        	<div className="column one-fourth">
		        		<nav className="menu">
		        		    <h2 className="menuHeading">菜单设置</h2>
		        			<a className="menuItem" herf="/menu/add">添加菜单</a>
		        			<a className="menuItem" herf="/menu/manage">菜单管理</a>
		        		</nav>
		        	</div>
		        	<div className="column three-fourth">
			        	<div className="boxed-group">
			        	 	<h2 className="menuHeading">添加菜单</h2>
			        		<MenuItem></MenuItem>
			        	 	<div>
				        	 	<h3>选择菜品图片</h3>
						        <PictureSelect></PictureSelect>
					        </div>
					    </div>
			        </div>
		        </div>
	        </div>
        );
    }
});
