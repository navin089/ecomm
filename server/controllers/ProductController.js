var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const model = require("../models/index");

//sample data getting route
const listProducts = async (req, res) => {

    model.Users.findAll().then(user => {
      if (user) {
        return res.json({
            data: user
        });
      }
    }).catch( error => {
      res.status( 400 ).send( error )
    })

};

module.exports = {
    listProducts
  };