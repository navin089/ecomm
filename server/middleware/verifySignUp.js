
const Model = require("../models");
const Users = Model.Users;

const checkDuplicateEmail = (req, res, next) => {
  
      // Email
      Users.findOne({
        where: {
          email: req.body.email
        }
      }).then(user => {
        if (user) {
          console.log('email is validated', user);
          res.status(400).send({
            message: "Failed! Email is already in use!"
          });
          return;
        }
  
        next();
      });
  };

  module.exports = { checkDuplicateEmail }
  
