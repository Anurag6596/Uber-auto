const captainController = require('../controllers/captain.controller');
const express = require('express');
const router = express.Router();
const { body } = require("express-validator");

router.post('/register',
captainController.registerCaptain
)



module.exports = router;