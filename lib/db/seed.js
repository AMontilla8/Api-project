const crVirus = require("../models/corona")
const coronaData = require("./csv")

crVirus.deleteMany({}).then(() => {
    crVirus.create(coronaData)
    .then(virus => {
        console.log(coronaData);
    })
    .catch(err => {
        console.log(err);
    });
});

