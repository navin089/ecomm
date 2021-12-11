const router = require('express').Router()
// const router = express.Router()
const { Test, RegisterUser, LoginUsers } = require('../controllers/UserController')




router.get('/test', Test);
router.post('/login', LoginUsers); 
router.post('/register', RegisterUser);


module.exports = router