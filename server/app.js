require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const router = require('./router')
const cors = require('cors');
const PORT = 5000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({ credentials: true }));

app.get('/', (req, res) => res.send('Nodsjs App is working'))

app.use('/api', router);

app.use(express.json());

//create simple root route
app.get("/", (req, res) => {
  res.write('this is node home page');
  res.end();
});



///server listener
app.listen(PORT, () => {
  console.log("Server running on port", PORT);
});

//module exporting
module.exports = {
	app
}
