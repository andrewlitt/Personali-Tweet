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
		return {
			isHidden:true,
			hasAnimated:false,
			personalityData: {}
		};
	},

	handleClick() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	},

	startAnimation(){
		this.setState({
			hasAnimated: true
		});
	},

	updatePersonalityData(data) {
		this.setState({
			personalityData: data
		});
	},

	render() {
		return (
			<div className='mainContainer' style={transparentBg}>
				<div className={this.state.hasAnimated ? "topHalf shrinkFrame" : "topHalf"}>
						<ul className="nav">
								<li><a href="#">ABOUT</a></li>
								<li><a target="_blankhttps://github.com/zackharley/ConUHacks">GITHUB</a></li>
						</ul>
						<h1 className={this.state.hasAnimated ? "logoText moveText" : "logoText"}>Personali-<span style={{fontFamily: 'Pacifico'}}>Tweet</span></h1>
						<h2 className={this.state.hasAnimated ? "infoText vanishText": "infoText"}>Language analysis of tweets. Fast.</h2>
						<SearchContainer 
							startAnimation={this.startAnimation}
							handleClick={this.handleClick}
							updatePersonalityData={this.updatePersonalityData}
						/>
				</div>
				<div className={this.state.hasAnimated ? "appearText bottomHalf" : "bottomHalf"}>
						<GraphContainer Data={this.state.personalityData} />
				</div>
			</div>
		)
	}

});


module.exports = Home;
