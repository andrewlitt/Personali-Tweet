const util = require('util'),
	twitter = require('twitter');

//if(!process.env.CONSUMER_KEY){
 //var env = require('./env.js');
//}

const twit= new twitter({
	consumer_key: 'eId5b5VC8To8y39dYcLXSbrOF',
	consumer_secret: 'NtlavHed2EoUiOQD0GPBNKbnObGqtGyHK9rFo3dmybObaqhCsP',
	access_token_key: '822885003143028737-opYlFqI5z9qXgVrFtgFoV62tjWl1PiD',
	access_token_secret: 'd920M4Pkk5KzQdjKRPBc60Xyx65fTqKz5u59ZguDwy5oI'
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
	res+="\n";
}
	res = emojiStrip(res);
	res =  res.replace(/https?:\/\/(www\.)?[-a-zA-Z0-9@:%._\+~#=]\.[a-z]{2,6}\b([-a-zA-Z0-9@:%_\+.~#?&//=]*)/g,"");
	res = res.replace(/@([A-Za-z]+[A-Za-z0-9]+)/g,"");
	res = res.replace(/#([A-Za-z]+[A-Za-z0-9]+)/g,"");
	res = res.replace(/[^\x00-\x7F]+/g, "");
	
	logger.write(res);	
	//console.log(r);

 });

