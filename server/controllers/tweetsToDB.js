const mongoose = require('mongoose');
const db = require('./db');
const User = require('./../schemas/user');

function tweetsToDB(req, res, next) {
	const user = req.params.user;

	const dataToSubmit = {
		name: user,
		tweets: req.tweets
	};

	console.log(dataToSubmit);
	
	const newUser = new User(dataToSubmit);

	newUser.save(function(err){
		if(err) {
			res.status(500).send(err);
		} else {
			console.log("User saved successfully!");
			next();
		}
	});

}


module.exports = tweetsToDB;

