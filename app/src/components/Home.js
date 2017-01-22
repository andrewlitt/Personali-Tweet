const React = require('react');
const transparentBg = require('../styles').transparentBg;
const ReactRouter = require('react-router');
const Link = ReactRouter.Link;
const Test = require('./Test');
const SearchContainer = require('../containers/SearchContainer');
const GraphContainer = require('../containers/GraphContainer');
const Spinner = require('./Spinner');

require("../styles/styletest.css");

var Home = React.createClass({

	getInitialState() {
		return {
			isHidden:true,
			hasAnimated:false,
			personalityData: {},
			isLoading: false
		};
	},

	handleClick() {
		this.setState({
			isHidden: !this.state.isHidden
		});
	},

	startAnimation(){
		this.setState({
			hasAnimated:true,
			isLoading: true
		});
	},

	stopAnimation() {
		this.setState({
			isLoading: false
		})
	},

	updatePersonalityData(data) {
 		this.setState({
 			personalityData: data
 		});
		console.log(data);
	},

	updateTweet(tweet) {
		let newState = {
			personalityData: this.state.personalityData
		};

		newState.personalityData.tweet = tweet;

		this.setState(newState);
	},

	render() {
		return (
			<div className='mainContainer' style={transparentBg}>
				<div className={this.state.hasAnimated ? "topHalf shrinkFrame" : "topHalf"}>
					<ul className="nav">
						<li><a target="_blank" href="https://github.com/zackharley/ConUHacks">GITHUB</a></li>
					</ul>
					<h1 className={this.state.hasAnimated ? "logoText moveText" : "logoText"}>Personali-<span style={{fontFamily: 'Pacifico'}}>Tweet</span></h1>
					<h2 className={this.state.hasAnimated ? "infoText vanishText": "infoText"}>Language analysis of tweets.</h2>
					<SearchContainer
						startAnimation={this.startAnimation}
						stopAnimation={this.stopAnimation}
						handleClick={this.handleClick}
						updatePersonalityData={this.updatePersonalityData}
					/>
				</div>
				<div className={this.state.hasAnimated ? "appearText bottomHalf" : "bottomHalf"}>
					{
						this.state.isLoading ?
							<Spinner /> :
							<GraphContainer 
								Data={this.state.personalityData} 
								updateTweet={this.updateTweet}
							/>
					}
				</div>
			</div>
		)
	}

});


module.exports = Home;
