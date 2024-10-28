const express = require('express')
const { Register } = require('../controller/auth/register')
const router = express.Router()


router.post('/register', Register)



module.exports = router