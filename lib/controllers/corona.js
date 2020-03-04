const crVirus = require("../models/corona")

module.exports = {
    index:(req, res) => {
        crVirus.find({})
        .then(crVirus => {
            res.json(crVirus)
        });
    },
    showDate: (req, res) => {
        crVirus.find({DateRep: req.params.Date})
        .then(crVirus => {
            res.json(crVirus)
        });
    },
    showCountry:(req, res) => {
        crVirus.find({CountryExp: req.params.Country})
        .then(crVirus => {
            res.json(crVirus)
        });
    },
    showCId: (req,res) => {
        crVirus.find({GeoId: req.params.GeoId})
        .then(crVirus => {
            res.json(crVirus)
        });
    },
    create: (req, res) => {
        crVirus.create(req.body)
          .then(crVirus => {
            res.json(crVirus)
          });
      },
      edit: (req, res) => {
        crVirus.findOneAndUpdate({name: req.params.name}, req.body)
          .then(crVirus => {
            res.json(crVirus)
          });
      },
      delete: (req, res) => {
        crVirus.delete({name: req.params.name})
          .then(crVirus => {
            res.json(crVirus)
          });
      }
};