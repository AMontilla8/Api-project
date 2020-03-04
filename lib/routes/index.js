const express = require('express')
const router = express();

router.use('./corona.js', require('./corona'))

module.exports = router