const express = require('express')
const lime = express();

lime.use('./corona.js', require('./corona'))

module.exports = lime