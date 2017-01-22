const mongoose = require('mongoose');
const db = require('./db');
const User = require('./../schemas/user');

function tweetsFromDB(req, res, next) {
	const user = req.params.user;
	User.find({name:user}, function(err, currUser){
		if(err) res.status(500).send(err);

		
		console.log(currUser);
		req.tweets = currUser['tweets'];
		next();
	});
}

module.exports = tweetsFromDB;
