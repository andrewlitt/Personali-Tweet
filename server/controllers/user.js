const AlchemyLanguageV1 = require('watson-developer-cloud/alchemy-language/v1');

const alchemy_language = new AlchemyLanguageV1({
  api_key: process.env.ALCHEMY_API_KEY
});

function user(req, res) {
	const params = {
		extract: 'authors,concepts,dates,doc-emotion,entities,feeds,keywords,pub-date,relations,typed-rels, doc-sentiment,taxonomy,title',
	  	text: req.tweets
	};

	alchemy_language.combined(params, function (err, response) {
	  	if (err) {
	  		console.log(err);
	    	res.status(400).send(err);
	  	} else {
	    	const emotionKeys = Object.keys(response.docEmotions);

	    	const sentimentColours = [
	    		'#00D10D',
	    		'#FF0400',
	    		'#FFF200'
	    	];

	    	const conceptColours = [
	    		'#8884D8',
	    		'#83A6ED',
	    		'#8DD1E1',
	    		'#82CA9D',
	    		'#A4DE6C',
	    		'#D0ED57'
	    	];

	    	res.json({
	    		tweet: req.generatedTweet,
	    		graphs: {
	    			sentimentData: [
	    				{
	    					name: 'Purely Positive Sentiment',
	    					score: 1,
	    					fill: sentimentColours[0]
	    				},
	    				{
	    					name: 'Purely Negative Sentiment',
	    					score: -1,
	    					fill: sentimentColours[1]
	    				},
	    				{
		    				sentiment: 'Sample Average Sentiment',
		    				score: parseFloat(response.docSentiment.score),
		    				fill: sentimentColours[2]
	    				}
	    			],
	    			conceptData: response.concepts.slice(0, 6).map((entry, index) => {
	    				return {
	    					name: entry.text,
	    					relevance: parseFloat(entry.relevance),
	    					fill: conceptColours[index]
	    				}
	    			}),
	    			taxData: response.taxonomy.map((entry) =>{
	    				return {
	    					label: entry.label,
	    					score: parseFloat(entry.score)
	    				}
	    			}),
	    			keywordData: response.keywords.map((keyword) => {
	    				return {
	    					text: keyword.text,
	    					value: parseFloat(keyword.relevance)
	    				}
	    			}),
	    			emotionData: emotionKeys.map((key) => {
	    				return {
	    					name: key,
	    					value: parseFloat(response.docEmotions[key])
	    				}
	    			})
	    		}
	    	});
		}
	});
}

module.exports = user;
