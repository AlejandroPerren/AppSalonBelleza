const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/ConectDB');
const Cita = require('./dateModel');
const Servicio = require('./servicesModel');

class CitaServicio extends Model {}

CitaServicio.init({
  id: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
  citaId: {
    type: DataTypes.INTEGER,
    references: {
      model: Cita,
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  },
  servicioId: {
    type: DataTypes.INTEGER,
    references: {
      model: Servicio,
      key: 'id',
    },
    onDelete: 'SET NULL',
    onUpdate: 'SET NULL',
  },
}, {
  sequelize,
  modelName: 'CitaServicio',
  tableName: 'citasServicios',
  timestamps: false,
});

CitaServicio.belongsTo(Cita, { foreignKey: 'citaId' });
CitaServicio.belongsTo(Servicio, { foreignKey: 'servicioId' });

module.exports = CitaServicio;
