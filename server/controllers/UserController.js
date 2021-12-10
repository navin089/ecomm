const bcrypt = require("bcrypt");
const db = require("../config/db");
const Users = require("../models/Users");
const Validator = require("validatorjs");

const { validationResult } = require("express-validator");

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
const getUsers = async (req, res, next) => {
  console.log("this is get all user function");
  // console.log(req.params)
  try {
    Users.find(db, (err, rows) => {
      if (err) {
        // res.sendStatus(500)
        res.end(
          JSON.stringify({
            message: "something went wrong",
            status: false,
          })
        );
      } else {
        // const data = JSON.stringify(rows)
        // res.sendStatus(200)
        console.log(JSON.stringify(rows));

        res.status(200).json({
          data: data,
          message: "user registration successfully",
          status: true,
        });
      }
    });
    next(res);
  } catch (e) {
    // console.log(e.message)
    // res.sendStatus(500)
    res.end(
      JSON.stringify({
        message: "something went wrong",
        status: false,
      })
    );
  }
};

//controller for creating new user
const createUser = async (req, res) => {
    let data = req.body;
    let rules = {
        name: 'required|string',
        email: 'required|email',
         password: 'required|min:8'
      };
    
      let validation = new Validator(data, rules);

      if (validation.passes()) {
        try {
            console.log(req.body);
            const data = req.body;
            Users.create(db, data, (err) => {
              if (!err) {
                // res.sendStatus(500)
                res.status(201).json({
                  message: "user registration successfully",
                  status: true,
                });
              } else {
              
                res.status(400).json({
                    message: "failed to create a new account",
                    status: false,
                  });
              }
            });
            // next(res)
          } catch (e) {
            // console.log(e.message)
            // res.sendStatus(500)
            res.status(400).json({
                message: "--failed to create a new account",
                status: false,
              });
          }
      }else{
        res.status(400).json({
            message: "-+-failed to create a new account",
            status: false,
          });
      }

    
 
};

module.exports = {
  Test,
  getUsers,
  createUser,
};
