const crVirus = "/lib/models/corona.js"

module.exports = {
    index:(req, res) => {
        crVirus.find({})
        .then(crVirus => {
            res.json(crVirus)
        })
    },
    showDate: (req, res) => {
        crVirus.find({DateRep: req.params.DateRep})
        .then(crVirus => {
            res.json(crVirus)
        })
    },
    showCountry:(req, res) => {
        crVirus.find({CountryExp: req.params.CountryExp})
        .then(crVirus => {
            res.json(crVirus)
        })
    },
    showCId: (req,res) => {
        crVirus.find({GeoId: req.params.GeoId})
        .then(crVirus => {
            res.json(crVirus)
        })
    },
    create: (req, res) => {
        crVirus.create(req.body)
          .then(crVirus => {
            res.json(crVirus)
          })
      },
      edit: (req, res) => {
        crVirus.findOneAndUpdate({name: req.params.name}, req.body)
          .then(crVirus => {
            res.json(crVirus)
          })
      },
      delete: (req, res) => {
        crVirus.delete({name: req.params.name})
          .then(crVirus => {
            res.json(crVirus)
          })
      }
}