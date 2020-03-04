const mongoose = require("../db/connection")

const csVirus = new mongoose.Schema({
    DateRep: Date,
    CountryExp: String,
    NewConfCases: Number,
    NewDeaths: Number,
    GeoId: String,
      });

module.exports = mongoose.model("csVirus", csVirus)