const express = require('express')
const router = express.Router()
const { Test, RegisterUser, LoginUsers } = require('../controllers/UserController')




router.get('/test', Test);
router.post('/login', LoginUsers); //createUser
router.post('/register', RegisterUser);


module.exports = router