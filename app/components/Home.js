const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Test = require('./Test');
const SearchContainer = require('../containers/SearchContainer');
const D3Container = require('../containers/D3Container');
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
					<center>
						<h1 className='logoText'>PersonaliTweet</h1>
						<p>Fancy Motto</p>
						<SearchContainer handleClick={this.handleClick} />
					</center>
				</div>
				<div className=''>
					<center>
						<p>Bottom div</p>
						<Test isHidden={this.state.isHidden} />
						<D3Container isHidden={this.state.isHidden} />
					</center>
				</div>
			</div>
		)
	}

});


module.exports = Home;
