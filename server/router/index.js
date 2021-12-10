const express = require('express')
const router = express.Router()
const { Test, getUsers, createUser } = require('../controllers/UserController')




router.get('/test', Test);
router.get('/users', getUsers); //createUser
router.post('/users', createUser);


module.exports = router