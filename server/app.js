require("dotenv").config();
const express = require("express");
const app = express();
const bodyParser = require('body-parser')
const router = require('./routes')
const cors = require('cors');
const db = require("./models");
const { checkDuplicateEmail } = require("./middleware/verifySignUp.js");
const PORT = 4000;

// parse application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({ extended: false }));

// parse application/json
app.use(bodyParser.json());

app.use(cors({ credentials: true }));

//create simple root route
app.get('/', (req, res) => res.send('Nodsjs App is working'))

app.use('/api', router);

app.use(express.json());

//for checking duplicate emails
// app.use(checkDuplicateEmail);

//db config with sequelize
// db.sequelize.sync();
db.sequelize.sync({ force: true }).then(() => {
  console.log("Drop and re-sync db.");
});

///server listener
app.listen(PORT, () => {
  console.log("Server running on port-", PORT);
});

//module exporting
module.exports = {
	app
}
