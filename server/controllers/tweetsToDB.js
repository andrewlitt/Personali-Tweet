const mongoose = require('mongoose');

function tweetsToDB(req, res, next) {
	const user = req.params.user;
	// Store req.tweets to db, then call next when successful
}

module.exports = tweetsFromDB;