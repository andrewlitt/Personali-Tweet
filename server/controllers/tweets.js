const util = require('util'),
	twitter = require('twitter');
const twit= new twitter({
	consumer_key: 'process.env.CONSUMER_KEY',
	consumer_secret: 'process.env.CONSUMER_SECRET',
	access_token_key: 'process.env.ACCESS_TOKEN_KEY',
	access_token_secret: 'process.env.ACCESS_TOKEN_SECRET'
});

const emojiStrip = require('emoji-strip'),
	emoji;
var i;
var newTweets;
var allTweets = [];
var oldest;
var screenName = 'pimpmytweeting'
var params = {screen_name: screenName, count: 200};


twit.get('statuses/user_timeline/trim_user=1', params, function(error, tweets, response) {
	
// if (!error) {
//	for(i = 0; i < tweets.length; i ++){
//	console.log(tweets[i].text + "\n");
//	}
	var r = tweets.reduce(function(all,tweet){
	return all +(tweet.text)
	});
	emojiStrip(r);
	console.log(r);
 });

