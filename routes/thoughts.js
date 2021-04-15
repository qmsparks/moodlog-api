const router = require('express').Router();
const { thoughts } = require('../controllers');

router.post('/:logId', thoughts.create);
router.put('/:thoughtId', thoughts.update);
router.delete('/:thoughtId', thoughts.destroy);

module.exports = router;