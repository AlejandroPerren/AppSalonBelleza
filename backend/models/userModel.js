const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db'); // Asegúrate de importar tu instancia de Sequelize

class Usuario extends Model {}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  apellido: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  email: {
    type: DataTypes.STRING(30),
    allowNull: true,
  },
  password: {
    type: DataTypes.STRING(60),
    allowNull: true,
  },
  telefono: {
    type: DataTypes.STRING(10),
    allowNull: true,
  },
  admin: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  confirmado: {
    type: DataTypes.BOOLEAN,
    allowNull: true,
  },
  token: {
    type: DataTypes.STRING(15),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;
