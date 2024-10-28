const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');

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
    type: DataTypes.DECIMAL(5, 2),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Servicio',
  tableName: 'servicios',
  timestamps: false,
});

module.exports = Servicio;
