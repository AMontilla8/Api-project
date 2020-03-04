const express = require("express")
const coronaController = require("../controllers/corona")
const lime = express();





lime.get('/', coronaController.index)
lime.get('/Date/:Date', coronaController.showDate)
lime.get('/Country/:Country', coronaController.showCountry)
lime.get('/id/:GeoId', coronaController.showCId)
lime.post('/', coronaController.create)
lime.get('/:Date', coronaController.edit)
lime.delete('/:Date', coronaController.delete)

module.exports = lime