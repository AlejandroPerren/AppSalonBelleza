const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/ConectDB');

class Servicio extends Model {}

Servicio.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  precio: {
    type: DataTypes.INTEGER, 
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Servicio',
  tableName: 'servicios',
  timestamps: false,
});

module.exports = Servicio;
