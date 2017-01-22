const React = require('react');

var FakeTweet = React.createClass({
	render () {
  	return (
      <div className="fakeTweetContainer">
			<div className="fakeTweetHeader">
				<img src={this.props.picture}/>
				<div className="fakeTweetUserNames">
					<h2>{this.props.name}</h2>
					<h2 className="grey">@{this.props.username}</h2>
				</div>
			</div>
			<p>{this.props.tweet}</p>
      </div>
    );
  }
})


module.exports = FakeTweet;
