var mongoose = require('mongoose');
mongoose.connect('mongodb://admin:password123@ds056009.mlab.com:56009/tweetdb');
var db = mongoose.connection;
db.on('error', console.error.bind(console, 'connection error:'));
db.once('open', function() {
console.log("connected to server");

var Schema = mongoose.Schema;

var userSchema = new Schema({
	name:String,
	tweet:String
});

var User = mongoose.model('User', userSchema);




});

module.exports = db;
