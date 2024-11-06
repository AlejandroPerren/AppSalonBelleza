const services = require('../../models/servicesModel');

const deleteServices = async (req, res) => {
    try {
        await services.destroy({
            where: {id: req.params.id}
        })
        res.status(200).json({
            message: "Servicio borrado correctamente"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = { deleteServices };
