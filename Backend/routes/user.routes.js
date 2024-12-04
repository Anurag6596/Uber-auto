const express = require('express');
const router = express.Router();
const { body } = require("express-validator")
const userController = require("../controllers/user.controller");



router.post('/register', [
    body('email').isEmail().withMessage('invalid Email'),
    body('fullname.firstname'),isLength({ min:3 }).withMessage('firstname must be at least 3 charcters long'),
    body('password').isLength({ min:6 }).withMessage('password must be atleast 6 charcters long')

],
userController.registerUser
)




module.exports = router;