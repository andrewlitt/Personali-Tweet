const router = require('express').Router();
const user = require('./../controllers/user');

router.get('/api/:user', user);

module.exports = router;