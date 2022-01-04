const express = require('express');

const router = express.Router({ mergeParams: true });

router.get('/', require('./list'));
router.get('/:id', require('./findById'));
router.post('/', require('./create'));

module.exports = router;
