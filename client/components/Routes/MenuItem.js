var React = require('react');
import InputComponent from './InputComponent'

export default React.createClass({
	render() {
		return (
			<div>
				<InputComponent id="menuName" title="菜名:"></InputComponent>
				<InputComponent id="priceOfMenu" title="单价/份"></InputComponent>
			</div>
		);
	}
});
