const services = require('../../models/servicesModel')


const getServices = async(req, res)=>{
    try {
        const listServices = await services.findAll();

        res.status(201).json({
            message :"Lista de Servicios:",
            success: true,
            data: listServices
        })
    }catch(error){
        console.error(error);
        res.status(500).json({ message: "Error en el servidor", error });
    }
}

module.exports = {getServices} 