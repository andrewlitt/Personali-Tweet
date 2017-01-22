var React = require('react');
const Search = require('../components/Search');

var SearchContainer = React.createClass({
	render(){
		return (
					<Search startAnimation={this.props.startAnimation} handleClick={this.props.handleClick}/>
			)
	}
})

module.exports = SearchContainer;
