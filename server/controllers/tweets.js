const util = require('util'),
	twitter = require('twitter');

//if(!process.env.CONSUMER_KEY){
 //var env = require('./env.js');
//}
const async = require('async');
const twit= new twitter({
	consumer_key: 'eId5b5VC8To8y39dYcLXSbrOF',
	consumer_secret: 'NtlavHed2EoUiOQD0GPBNKbnObGqtGyHK9rFo3dmybObaqhCsP',
	access_token_key: '822885003143028737-opYlFqI5z9qXgVrFtgFoV62tjWl1PiD',
	access_token_secret: 'd920M4Pkk5KzQdjKRPBc60Xyx65fTqKz5u59ZguDwy5oI'
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

modules.exports = getTweet
