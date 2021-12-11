var bcrypt = require('bcryptjs');
const Model = require("../models");
const Users = Model.Users;
// const Op = Model.Sequelize.Op;
// const Validator = require("validatorjs");
// const { validationResult } = require("express-validator");

//sample data getting route
const Test = async (req, res) => {
  res.json({
    posts: [
      { title: "First posts" },
      { city: "CAROLINA" },
      { Date: "12/3/2021" },
      { author: "Jia Morgan" },
    ],
  });
};

//listing of no of users from database
const LoginUsers = async (req, res, next) => {

  if (!req.body.email && !req.body.password) {
    res.status(400).send({
      message: "email and password can not be empty!",
      success: false
    });
    return;

  }else {
    const email = req.body.email;
    const password = req.body.password;

    Users.findAll({
      where: {
        email: email
      }
    })
    .then(data => {
      // res.send(data);
      console.log('login data ;',data[0].dataValues.password);
      if (data[0].dataValues.password == password) {
        res.status(200).send({
            data: data,
            message: 'user logged in successfully',
            success: true
        });
      }else {
        res.status(404).send({
          message: 'Password is invalid',
          success: false
      });
      }
    })
    .catch(err => {
      res.status(404).send({
        message:
          err.message || "user does not exist",
          success: false
      });
    });

  }
  
};

//controller for creating new user
const RegisterUser = async (req, res) => {
    // Validate request
  if (!req.body) {
    res.status(400).send({
      message: "Content can not be empty!",
      success: false
    });
    return;
  }

  // Create a Tutorial
  const user = {
    name: req.body.name,
    email: req.body.email,
    password: bcrypt.hashSync('bacon', 10)
  };

  // Save Tutorial in the database
  Users.create(user)
    .then(data => {
      res.status(201).send({
          data: data, 
          message: "User has been created successfully..",
          success: true
        });
    })
    .catch(err => {
      res.status(500).send({
        message:
          err.message || "Some error occurred while creating the user.",
          success: false
      });
    });

};

module.exports = {
  Test,
  RegisterUser,
  LoginUsers
};
