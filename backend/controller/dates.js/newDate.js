const Cita = require('../../models/dateModel');
const CitaServicio = require('../../models/dateServicesModel');


const crearCita = async (req, res) => {
  try {

    const { fecha, hora, servicios } = req.body;
    const usuarioId = req.params.usuarioId;


    const nuevaCita = await Cita.create({
      fecha,
      hora,
      usuarioId
    });

    const citaServicios = servicios.map(servicioId => ({
      citaId: nuevaCita.id,
      servicioId
    }));

    await CitaServicio.bulkCreate(citaServicios);

    res.status(201).json({ message: 'Cita creada con éxito', cita: nuevaCita });
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: 'Error al crear la cita' });
  }
};

module.exports = {
  crearCita
};
