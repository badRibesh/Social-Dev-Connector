const express = require('express');
const router = express.Router();

// @router  GET api/auth
// @desc   Test Route
// @access public
router.get('/', (req, res) => res.send('Auth Route'));

module.exports = router;
