const router = require('express').Router();
const user = require('./../controllers/user');
const tweets = require('./../controllers/tweets');

router.get('/api/:tweets',user);
router.get('/api/:user', user);

module.exports = router;
