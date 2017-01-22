const util = require('util'),
	twitter = require('twitter');
const twit= new twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
  	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

const emojiStrip = require('emoji-strip');


function getTweet(req, res, next){
	var newTweets;
  params = {
            screen_name: req.params.user,
            count: 200,
            exclude_replies: true,
            include_rts: false
        };
        twit.get('statuses/user_timeline', params, function(error, tweets, response) {
		if(error){
		console.log("error getting tweets");
		}
            for (i = 0; i < tweets.length; i++) {
                newTweets += tweets[i].text;
                newTweets += "\n";
            }

        try {
            newTweets = emojiStrip(allTweets);
            newTweets = allTweets.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, "");
            newTweets = allTweets.replace(/@([A-Za-z]+[A-Za-z0-9]+)/g, "");
            newTweets = allTweets.replace(/#([A-Za-z]+[A-Za-z0-9]+)/g, "");
            newTweets = allTweets.replace(/[^\x00-\x7F]+/g, "");

            logger.write(allTweets);
        } catch (e) {
            console.log("unable to clean tweets", e);
        }

	req.tweets = newTweets;
	next();
});
}
module.exports = getTweet;
