const AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');

const alchemy_language = new AlchemyLanguageV1({
  api_key: process.env.ALCHEMY_API_KEY
});

const tweets = 'The same people who did the phony election polls, and were so wrong, are now doing approval rating polls. They are rigged just like before.';

function user(req, res) {
	const params = {
		extract: 'authors,concepts,dates,doc-emotion,entities,feeds,keywords,pub-date,relations,typed-rels, doc-sentiment,taxonomy,title',
	  	text: tweets
	};

	alchemy_language.combined(params, function (err, response) {
	  	if (err) {
	    	res.status(500).send('error:', err);
	  	} else {
	    	res.json(response);
		}
	});
}

module.exports = user;
