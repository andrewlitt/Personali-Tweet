var MarkovChain = require('markovchain')
   , fs = require('fs')
   ,quotes = new MarkovChain(fs.readFileSync('./tweet.txt', 'utf8'))

console.log(quotes.start('I').end(9).process());
