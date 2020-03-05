const express = require("express")
const coronaController = require("../controllers/corona")
const router = express();
// .Router({caseSensitive: true});

router.get('case sensitive routing', true);


router.get('/', coronaController.index)
router.get('/Date/:Date', coronaController.showDate)
router.get('/Country/:Country', coronaController.showCountry)
router.get('/id/:GeoId', coronaController.showCId)
router.post('/', coronaController.create)
router.get('/:Date', coronaController.edit)
router.delete('/:Date', coronaController.delete)

module.exports = router