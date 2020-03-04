const mongoose = require("../db/connection")

const crVirus = new mongoose.Schema({
    DateRep: String,
    CountryExp: String,
    NewConfCases: Number,
    NewDeaths: Number,
    GeoId: String,
      });

module.exports = mongoose.model("crVirus", crVirus)