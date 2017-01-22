const React = require('react');
const axios = require('axios');

var FakeTweet = React.createClass({
	handleClick(event) {
		const url = `/api/tweet/${this.props.username}`;
		axios.get(url)
			.then((response) => {
				if(response) {
					this.props.updateTweet(response.data.tweet);
				}
			})
			.catch((error) => {
				console.log(error);
			});
	},

	render () {
	  	return (
	      <div className="fakeTweetContainer">
				<div className="fakeTweetHeader">
					<img src={this.props.picture}/>
					<div className="fakeTweetUserNames">
						<h2>{this.props.name}</h2>
						<h2 className="grey">@{this.props.username}</h2>
					</div>
					<i onClick={this.handleClick} className="fa fa-refresh refresh" />
				</div>
				<p>{this.props.tweet}</p>
	      </div>
	    );
  	}
})


module.exports = FakeTweet;
