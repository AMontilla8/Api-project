const crVirus = require("../models/corona");
const coronaData = require("./csv");

crVirus.remove({}).then(() => {
    crVirus.create(coronaData)
    .then(virus => {
        console.log(virus);
    })
    .catch(err => {
        console.log(err);
    });
});

