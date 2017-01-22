const router = require('express').Router();
const cors = require('./../controllers/cors');
const tweets = require('./../controllers/tweets');
const markovChain = require('./../controllers/markovChain');
const user = require('./../controllers/user');
const search = require('./../controllers/search');

router.use(cors);

router.get('/api/user/:user', tweets)
router.get('/api/user/:user', markovChain);
router.get('/api/user/:user', user);
router.get('/api/search', search);

module.exports = router;