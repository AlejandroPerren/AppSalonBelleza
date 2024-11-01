const express = require('express');
const { Register } = require('../controller/auth/register');
const { Login } = require('../controller/auth/login');
const router = express.Router();

router.post('/register', function(req,res){
    Register
});
router.post('/login', function(req,res){
    Login
});

module.exports = router; 
