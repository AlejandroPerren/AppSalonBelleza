const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/router');
const cookieParser = require('cookie-parser')

const app = express();

const corsOptions = {
  origin: 'http://localhost:5173',
  methods: ['GET', 'POST', 'PATCH', 'DELETE', 'PUT'],
   allowedHeaders: ['Content-Type']
};

app.use('*',cors(corsOptions));
app.use(express.json()); 
app.use(cookieParser())
// Rutas
app.use('/', router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
