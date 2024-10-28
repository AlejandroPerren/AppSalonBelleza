const { Sequelize } = require('sequelize');
const dotenv = require('dotenv').config()

const sequelize = new Sequelize('appsalon', 'root', 'process.env.DB_PASSWORD', {
    host: 'localhost',
    dialect:  'mysql' 
  });


  
  try {
    await sequelize.authenticate();
    console.log('Connection has been established successfully.');
  } catch (error) {
    console.error('Unable to connect to the database:', error);
  }

