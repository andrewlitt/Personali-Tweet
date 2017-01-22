const mongoose = require('mongoose');
var User = require('db.js');
function tweetsToDB(req, res, next) {
	const user = req.params.user;
	
	var newUser = new User({
	name: user,
	tweets: req.tweets
	});

	newUser.save(function(err){
	if(err) res.status(500).send(err);
	console.log("User saved successfully!");
	});

	next();
	// Store req.tweets to db, then call next when successful
}

module.exports = tweetsFromDB;
