const mongoose = require("mongoose")
mongoose.connect("mongodb://localhost/Corona", {useNewUrlParser: true})
module.exports = mongoose