const router = require('express').Router()
//listProducts
const { Test, RegisterUser, LoginUsers } = require('../controllers/UserController');
const { listProducts } = require('../controllers/ProductController')




router.get('/test', Test);
router.post('/login', LoginUsers); 
router.post('/register', RegisterUser);

router.post('/products', listProducts);


module.exports = router