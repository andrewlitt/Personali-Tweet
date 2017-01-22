const mongoose = require('mongoose');
const db = require('./db');
const User = require('./../schemas/user');

function tweetsToDB(req, res, next) {
	const user = req.params.user;

	const dataToSubmit = {
		name: user,
		tweets: req.tweets
	};
	
	const newUser = new User(dataToSubmit);
	
	User.findOneAndUpdate({name: user}, dataToSubmit, {upsert: true}, (err) => {
		if(err) {
			res.status(500).send(err);
		} else {
			console.log('User saved successfully!');
			res.next();
		}
	});

}


module.exports = tweetsToDB;

