const express = require('express')
const { route } = require('./routes/routes')
const dotenv = require('dotenv').config


const app = express()

app.use('/api', route)

PORT = 4000 || process.env.PORT
app.listen(PORT, () =>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})






