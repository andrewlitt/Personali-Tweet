const request = require('request');
const Twitter = require('twitter');
 
const client = new Twitter({
  	consumer_key: process.env.TWITTER_CONSUMER_KEY,
  	consumer_secret: process.env.TWITTER_CONSUMER_SECRET,
  	access_token_key: process.env.TWITTER_ACCESS_TOKEN_KEY,
  	access_token_secret: process.env.TWITTER_ACCESS_TOKEN_SECRET
});
 


function search(req, res) {
	const params = {
		q: req.query.q,
		count: 5

	};

	client.get('users/search', params)
		.then((users) => {

			const results = users.map((user) => {
				return {
					name: user.name,
					username: user.screen_name,
					picture: user.profile_image_url
				};
			});

			res.send(results);
		})	
		.catch((error) => {
			res.status(400).send(error);
		});
}

module.exports = search;