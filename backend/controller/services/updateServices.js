const services = require('../../models/servicesModel');

const updateServices = async (req, res) => {
    try {
        await services.update(req.body,{
            where: {id: req.params.id}
        })
        res.status(200).json({
            message: "Servicio Actualizado correctamente",
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = { updateServices };
