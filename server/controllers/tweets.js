const util = require('util');
const twitter = require('twitter');
const emojiStrip = require('emoji-strip');

const twit = new twitter({
	consumer_key: process.env.TWITTER_CONSUMER_KEY,
  	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});

function getTweet(req, res, next){
	let newTweets;

  	const params = {
        screen_name: req.params.user,
        count: 200,
        exclude_replies: true,
        include_rts: false
    };
    twit.get('statuses/user_timeline', params, (error, tweets) => {
        if(error) {
            res.status(400).send(error);
        } else {
            const tweetsString = tweets.map((tweet) => {
                return tweet.text;
            }).join('\n');

            let cleanedTweets;

            try {
                cleanedTweets = emojiStrip(tweetsString)
                    .replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g, '')
                    .replace(/@([A-Za-z]+[A-Za-z0-9]+)/g, '')
                    .replace(/#([A-Za-z]+[A-Za-z0-9]+)/g, '')
                    .replace(/[^\x00-\x7F]+/g, '');
            } catch (e) {
                console.log('unable to clean tweets', e);
            }

            req.tweets = cleanedTweets;
            next();
        }
    });
}

module.exports = getTweet;
