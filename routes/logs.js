const router = require('express').Router();
const ctrl = require('../controllers');

router.get('/', ctrl.logs.index);
router.get('/:logId', ctrl.logs.show);
router.put('/:logId', ctrl.logs.update);
router.post('/', ctrl.logs.create);
router.delete('/:logId', ctrl.logs.destroy);

module.exports = router;