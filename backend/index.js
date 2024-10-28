const express = require('express');
const dotenv = require('dotenv').config();
const cors = require('cors');
const router = require('./routes/routes');

const app = express();

const corsOptions = {
  origin: '*', 
};

app.use(cors(corsOptions));
app.use(express.json()); 

// Rutas
app.use('/', router);

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => {
  console.log(`Servidor funcionando en el puerto ${PORT}`);
});
