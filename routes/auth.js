const router = require('express').Router();
const { auth } = require('../controllers');
const authRequired = require('../middleware/authRequired');


router.get('/', authRequired, auth.verify)
router.post('/register', auth.register);
router.post('/login', auth.login);

module.exports = router;