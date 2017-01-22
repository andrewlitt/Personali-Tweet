const router = require('express').Router();
const cors = require('./../controllers/cors');
const tweetsFromDB = require('./../controllers/tweetsFromDB');
const markovChainSend = require('./../controllers/markovChainSend');
const tweets = require('./../controllers/tweets');
const tweetsToDB = require('./../controllers/tweetsToDB');
const markovChain = require('./../controllers/markovChain');
const user = require('./../controllers/user');
const search = require('./../controllers/search');

router.use(cors);

router.get('/api/tweet/:user', tweetsFromDB);
router.get('/api/tweet/:user', markovChainSend);

router.get('/api/user/:user', tweets);
router.get('/api/user/:user', tweetsToDB);
router.get('/api/user/:user', markovChain);
router.get('/api/user/:user', user);

router.get('/api/search', search);


module.exports = router;
