const util = require('util'),
	twitter = require('twitter');

const twit= new twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
  	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const emojiStrip = require('emoji-strip'),
	emoji;

var fs = require('fs');
var logger = fs.createWriteStream('tweet.txt', {
	flags: 'a'
})

var res;
var i;
var newTweets;
var allTweets = [];
var oldest;
var screenName = 'lindsaymullett'
var params = {screen_name: screenName, count: 200, exclude_replies: true, include_rts:false};


twit.get('statuses/user_timeline/trim_user=1', params, function(error, tweets, response) {
for(i = 0; i < tweets.length; i ++){
	res += tweets[i].text;
	res += '\n';
}
	res = emojiStrip(res);
	res =  res.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,"");
	res = res.replace(/@([A-Za-z]+[A-Za-z0-9]+)/g,"");
	res = res.replace(/#([A-Za-z]+[A-Za-z0-9]+)/g,"");
	res = res.replace(/[^\x00-\x7F]+/g, "");
	
	logger.write(res);	
 });

