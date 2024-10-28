const express = require('express')
const { route } = require('./routes/routes')
const dotenv = require('dotenv').config
const cors = require('cors')

const app = express()
var corsOptions = {
    origin: 'http://localhost:5173.com',
    optionsSuccessStatus: 200 
  }

app.use('/api',cors(corsOptions) ,route)

PORT = 4000 || process.env.PORT
app.listen(PORT, () =>{
    console.log(`Servidor funcionando en el puerto ${PORT}`)
})






