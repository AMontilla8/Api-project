const express = require("express")
const coronaController = require("../controllers/corona")
const lime = express();

lime.get('/', coronaController.index)
lime.get('/:Date', coronaController.showDate)
lime.get('/:Country', coronaController.showCountry)
lime.get('/:Id', coronaController.showCId)
lime.post('/', coronaController.create)
lime.get('/:Date', coronaController.edit)
lime.delete('/:Date', coronaController.delete)

module.exports = lime