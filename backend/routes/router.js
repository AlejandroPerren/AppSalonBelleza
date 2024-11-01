const express = require('express');
const { Register } = require('../controller/auth/register');
const { Login } = require('../controller/auth/login');
const router = express.Router();

router.post('/register', Register);
router.post('/login', Login);

module.exports = router; 
