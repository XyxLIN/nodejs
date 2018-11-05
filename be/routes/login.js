var express = require('express');
var router = express.Router();

var  login_controller = require('../controller/login_controller')

router.post('/register',login_controller.register)

// router.post('/login',login_controller.login)

module.exports = router