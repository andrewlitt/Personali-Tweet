const MarkovChain = require('markovchain');
const fs = require('fs');

function markov(req, res, next) {
	console.log(req.tweets)
	const quotes = new MarkovChain(req.tweets);

	req.generatedTweet = quotes.start('I').end(9).process();
	next();
}

module.exports = markov;