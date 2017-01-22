const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Test = require('./Test');
const SearchContainer = require('../containers/SearchContainer');
const GraphContainer = require('../containers/GraphContainer');
require("../styles/styletest.css");

var Home = React.createClass({
	getInitialState() {
		return {isHidden:true};

	},
	handleClick() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	},
	render() {
		return (
			<div className='mainContainer' style={transparentBg}>
				<div className="topHalf">
						<h1 className='logoText'>Personali-Tweet</h1>
						<SearchContainer handleClick={this.handleClick} />
				</div>
				<div className='bottomHalf'>
					<center>
						<GraphContainer />
					</center>
				</div>
			</div>
		)
	}

});


module.exports = Home;
