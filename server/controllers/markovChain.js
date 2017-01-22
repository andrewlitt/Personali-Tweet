const MarkovChain = require('markovchain');
const fs = require('fs');

function markov(req, res, next) {
	const quotes = new MarkovChain(fs.readFileSync('./tweet.txt', 'utf8'));
	// const quotes = new MarkovChain(req.tweets);

	console.log(quotes.start('I').end(9).process());
	// req.generatedTweet = quotes.start('I').end(9).process();
	// next();
}

module.exports = markov;