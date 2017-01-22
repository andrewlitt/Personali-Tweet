const router = require('express').Router();
const cors = require('./../controllers/cors');
const user = require('./../controllers/user');
const search = require('./../controllers/search');

router.use(cors);

router.get('/api/user/:user', user);
router.get('/api/search', search);

module.exports = router;