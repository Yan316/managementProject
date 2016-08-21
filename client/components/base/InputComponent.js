var React = require('react');

export default React.createClass({
	getInitialState: function() {
		return {value: ""};
	},

	handleChange: function(event) {
		 this.setState({
            value: e.target.value});
	},

	render() {
		return (
			<div>
			   <p><strong>{this.props.title}</strong></p>
			   <input id={this.props.id} name={this.props.name} onChange={this.handleChange} value={this.state.value}></input>
			</div>
			);
	}
});