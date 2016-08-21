require("../../css/menu.css");
import React from 'react'
import { render } from 'react-dom'
import NavLink from './NavLink'
import PictureSelect from '../base/PictureSelect'
import MenuItem from '../menu/MenuItem'
var $ = require('jQuery');

export default React.createClass({
    render() {
        return (
	        <div>
		        <PictureSelect></PictureSelect>
		        <MenuItem></MenuItem>
	        </div>
        );
    }
});
