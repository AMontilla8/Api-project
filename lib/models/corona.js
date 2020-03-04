const mongoose = require("../db/connection")

const crVirus = new mongoose.Schema({
    DateRep: {type: Object},
    CountryExp: String,
    NewConfCases: Number,
    NewDeaths: Number,
    GeoId: String,
      });

module.exports = mongoose.model("crVirus", crVirus)