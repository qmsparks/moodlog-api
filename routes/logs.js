const router = require('express').Router();
const ctrl = require('../controllers');

router.post('/', ctrl.logs.create);

module.exports = router;