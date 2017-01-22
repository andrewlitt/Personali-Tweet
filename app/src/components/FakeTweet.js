const React = require('react');

var FakeTweet = React.createClass({
	render () {
  	return (
      <div className="fakeTweetContainer">
				<div className="fakeTweetHeader">
					<img src={this.props.picture}/>
					<div>
						<h1>{this.props.name}</h1>
						<h2>@{this.props.username}</h2>
					</div>
				</div>
				<p>{this.props.tweet}</p>
      </div>
    );
  }
})


module.exports = FakeTweet;
