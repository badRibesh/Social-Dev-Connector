const express = require('express');
const router = express.Router();

// @router  GET api/post
// @desc   Test Route
// @access public
router.get('/', (req, res) => res.send('Posts Route'));

module.exports = router;
