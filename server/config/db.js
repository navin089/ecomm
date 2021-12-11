// const mysql = require("mysql");

// const db = mysql
//   .createConnection({
//     host: process.env.HOST,
//     user: process.env.DB_USERNAME,
//     password: process.env.DB_PASSWORD,
//     database: process.env.DB_NAME
//   })
//   .on("error", (err) => {
//     console.log("Failed to connect to Database - ", err);
//   });

// module.exports = db;

module.exports = {  
  HOST: process.env.HOST,
  USER: process.env.DB_USERNAME,
  PASSWORD: process.env.DB_PASSWORD,
  DB: process.env.DB_NAME,
  dialect: "mysql",
  pool: {
    max: 5,
    min: 0,
    acquire: 30000,
    idle: 10000
  }
};