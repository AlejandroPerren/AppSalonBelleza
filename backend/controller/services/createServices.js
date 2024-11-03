const services = require('../../models/servicesModel')


const createServices = async(req, res)=>{
    try {
        const {nombre, precio } = req.body
        console.log( req.body)

        const service = await services.findOne({where : {nombre}});
        if(service){
            return res.status(400).json({
                message : "Este Servicio ya existe"
            })
        }

        const newService = await services.create({
            nombre,
            precio,
        })
        console.log(newService)
        res.status(200).json({
            message : "Servicio Creado Con Exito"
            
        })
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error en el servidor", error });
    }
}

module.exports = {createServices}