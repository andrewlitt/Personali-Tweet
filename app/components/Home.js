var React = require('react');
var transparentBg = require('../styles').transparentBg;
var ReactRouter = require('react-router');
var Link = ReactRouter.Link;
const Test = require('./Test')
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
			<div className='text-center' style={transparentBg}> 
				<div>
					<h1 className='test'>PersonaliTweet</h1>
					<p className='lead'> Fancy Motto </p>
				
					<button type='button' className='' onClick={this.handleClick}> Search </button>
				</div>
				<div className=''>
					Bottom div
					<Test props={this.state.isHidden} />
				</div>
			</div>

		)
	}

});


module.exports = Home;