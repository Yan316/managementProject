var React = require('react');
import InputComponent from '../base/InputComponent'

export default React.createClass({
	render() {
		return (
			<div>
				<h3>设置菜品详情</h3>
				<div className="marginLeft-10">
					<InputComponent id="menuName" title="菜名:"></InputComponent>
					<InputComponent id="priceOfMenu" title="单价/份"></InputComponent>
				</div>
			</div>
		);
	}
});
