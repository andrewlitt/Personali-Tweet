const mongoose = require('mongoose');
const User = require('./db');

function tweetsToDB(req, res, next) {
	const user = req.params.user;
	
	const newUser = new User({
		name: user,
		tweets: req.tweets
	});

	newUser.save(function(err){

	if(err) res.status(500).send(err);
		console.log("User saved successfully!");
	});

	next();
}


module.exports = tweetsToDB;

