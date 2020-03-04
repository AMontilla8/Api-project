const express = require('express')
const app = express();
const parser = require("body-parser")

app.use(parser.json());


app.listen(3001, () => console.log('Is your server running? Better go catch it!'))
