const express = require('express');

const { loginUser, signupUser, addToCart, getCart, deleteItemFromCart, decrementItemfromCart, incrementItemfromCart } = require('../controllers/userController');

const router = express.Router();

//route for login
router.post('/login', loginUser)

//route for signup
router.post('/signup', signupUser)

//route to addItemtoCart
router.put('/addtocart', addToCart)

router.post('/cart', getCart)

router.delete('/cart/:id', deleteItemFromCart)

router.put('/cart/decrement/:id', decrementItemfromCart)

router.put('/cart/increment/:id', incrementItemfromCart)

module.exports = router;