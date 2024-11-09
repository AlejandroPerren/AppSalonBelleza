const Cita = require('../../models/dateModel');
const CitaServicio = require('../../models/dateServicesModel');
const Servicio = require('../../models/servicesModel');
const Usuario = require('../../models/userModel');


const getDates = async (req, res) => {
    try {
      const citas = await Cita.findAll({
        include: [
          {
            model: Usuario,
            attributes: ['nombre', 'apellido'], 
          },
          {
            model: Servicio,
            through: { model: CitaServicio },
            attributes: ['nombre', 'precio'],
          },
        ],
      });
  
      res.status(200).json(citas);
    } catch (error) {
      console.error("Error al obtener las citas:", error);
      res.status(500).json({ message: "Error al obtener las citas" });
    }
  };
  
  module.exports = {
    getDates
  };