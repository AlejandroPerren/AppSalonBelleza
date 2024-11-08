const services = require('../../models/servicesModel');

const updateServices = async (req, res) => {
    try {
        const updatedRows = await services.update(req.body, {
            where: { id: req.params.id }
        });

        if (updatedRows[0] === 0) {
            return res.status(404).json({ message: "Servicio no encontrado" });
        }

        res.status(200).json({ message: "Servicio actualizado correctamente" });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor" });
    }
};

module.exports = { updateServices };
