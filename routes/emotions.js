const router = require('express').Router();
const { emotions } = require('../controllers');

router.post('/:logId', emotions.create);
router.put('/:emotionId', emotions.update);
router.delete('/:emotionId', emotions.destroy);

module.exports = router;