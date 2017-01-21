var React = require('react');

var Test = React.createClass({
	render() {
		return this.props.isHidden ? '' :(
			<div> Test </div>
		)
	}
});

module.exports = Test