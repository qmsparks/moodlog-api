const router = require('express').Router();
const { logs } = require('../controllers');

router.get('/', logs.index);
router.get('/:logId', logs.show);
router.put('/:logId', logs.update);
router.post('/', logs.create);
router.delete('/:logId', logs.destroy);

module.exports = router;