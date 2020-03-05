const express = require('express')
const app = express();
const parser = require("body-parser")



app.set("port", process.env.PORT || 8181);

app.listen(app.get("port"), () => {
  console.log(`✅ PORT: ${app.get("port")} 🌟`);
});

app.use(parser.json());
app.use("/", require("./routes/corona"))

app.listen(3001, () => console.log('Is your server running? Better go catch it!'))
