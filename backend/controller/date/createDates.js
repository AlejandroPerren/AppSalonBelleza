
const createDate = async (req, res) => {
    const { fecha, hora, usuarioId, servicios } = req.body;
  
    if (!fecha || !hora || !usuarioId || !Array.isArray(servicios)) {
      return res.status(400).json({ message: "Faltan datos obligatorios o formato incorrecto" });
    }
  
    try {
      const nuevaCita = await Cita.create({
        fecha,
        hora,
        usuarioId,
      });
  
      if (servicios.length > 0) {
        const citaServicios = servicios.map((servicioId) => ({
          citaId: nuevaCita.id,
          servicioId,
        }));
        
        await CitaServicio.bulkCreate(citaServicios);
      }
  
      res.status(201).json({ message: "Cita creada exitosamente", cita: nuevaCita });
    } catch (error) {
      console.error("Error al crear la cita:", error);
      res.status(500).json({ message: "Error al crear la cita" });
    }
  };
  
  module.exports = {
    createDate,
  };