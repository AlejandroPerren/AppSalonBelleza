const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/db');
const Usuario = require('./Usuario'); // Asegúrate de importar el modelo de Usuario

class Cita extends Model {}

Cita.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  fecha: {
    type: DataTypes.DATEONLY,
    allowNull: true,
  },
  hora: {
    type: DataTypes.TIME,
    allowNull: true,
  },
  usuarioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Usuario,
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  },
}, {
  sequelize,
  modelName: 'Cita',
  tableName: 'citas',
  timestamps: false,
});

Cita.belongsTo(Usuario, { foreignKey: 'usuarioId' });

module.exports = Cita;
