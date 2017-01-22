const mongoose = require('mongoose');

function tweetsFromDB(req, res, next) {
	const user = req.params.user;
	// retrieve the correct tweets and pass them as req.tweets before calling next();
}

module.exports = tweetsFromDB;