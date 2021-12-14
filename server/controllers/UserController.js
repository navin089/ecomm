var bcrypt = require('bcryptjs');
var jwt = require('jsonwebtoken');
const model = require("../models/index");
// const Users = Model.Users;


//sample data getting route
const Test = async (req, res) => {


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

//listing of no of users from database
const LoginUsers = async (req, res, next) => {

  try {
    
    // Get user input
    // const { email, password } = req.body;
    const email = req.body.email;
    const password = req.body.password;
    console.log('req body: ' + email, password)
    // Validate user input
    if (!(email && password)) {
      res.status(400).send({
        message: "All input fields are required.",
        success: false
    });
  }

  model.Users.findAll({
    where: {email: email}
  }).then(user => {
      console.log('login data ;',user.dataValues.password);
      const dencryptedPassword = bcrypt.compare(password, user.dataValues.password);
      console.log('decryprted password ;', dencryptedPassword)
    if (user && dencryptedPassword) {
      
        res.status(200).send({
            data: user,
            message: 'user logged in successfully',
            success: true
        });
        return
    }else{
      res.status(400).send({
        message: 'Invalid Credentials',
        success: false
      });
    }
  }).catch(err => {
    res.status(404).send({
      message:
        err.message || "something went wrong",
        success: false
    });
  });

} catch{
  console.log(err);
  res.status(500).send({
    message:
      err.message || "Some error occurred while creating the user.",
      success: false
  });
}

};

//controller for creating new user
const RegisterUser = async (req, res) => {
  
  try {
     // Get user input
     const { name, email, password } = req.body;

     // Validate user input
     if (!(email && password && name)) {
       res.status(400).send({
        message: "All input fields are required.",
        success: false
    });
     }

     model.Users.findAll({
      where: {email: email}
    }).then(user => {
      if (user) {
        return res.status(409).send({
            message: "User already exists please login.",
            success: false
        });
      }
    })

     //Encrypt user password and generate token
     const encryptedPassword = await bcrypt.hash(password, 10);
     const token = jwt.sign({ email: email }, 'shhhhh');
     
  // Create a Tutorial
  const user = {
    name: name,
    email: email,
    password: encryptedPassword,
    token: token
  };

  // Save Tutorial in the database
  model.Users.create(user)
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

  }catch (err) {
    console.log(err);
    res.status(500).send({
      message:
        err.message || "Some error occurred while creating the user.",
        success: false
    });
  }

};

module.exports = {
  Test,
  RegisterUser,
  LoginUsers
};
