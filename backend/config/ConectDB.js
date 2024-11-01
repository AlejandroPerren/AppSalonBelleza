const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config()

const sequelize = new Sequelize ('appsalon', 'root', process.env.DB_PASSWORD, {
    host: 'localhost',
    dialect:  'mysql' 
  });


  (async () => { 
  try {
    await sequelize.authenticate();
    console.log('Coneccion establecida con exito.');
  } catch (error) {
    console.error('No se encuentra la base de datos:', error);
  }
})();

module.exports = sequelize;