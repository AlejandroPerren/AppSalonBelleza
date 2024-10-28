const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/ConectDB');

class Usuario extends Model {}

Usuario.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  nombre: {
    type: DataTypes.STRING(60),
    allowNull: false, 
},
apellido: {
    type: DataTypes.STRING(60),
    allowNull: false, 
},
email: {
  type: DataTypes.STRING(30),
  allowNull: false,
  unique: true,
  validate: {
      isEmail: true, 
  },
},
password: {
    type: DataTypes.STRING(60),
    allowNull: false, 
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
    type: DataTypes.STRING(200),
    allowNull: true,
  },
}, {
  sequelize,
  modelName: 'Usuario',
  tableName: 'usuarios',
  timestamps: false,
});

module.exports = Usuario;
