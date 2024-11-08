const Usuario = require("../models/userModel")

const uploadProductPermission = async (id) => {
    try {
        const user = await Usuario.findByPk(id);

        return user.admin;
    } catch (error) {
        console.error("Error No Tienes Permisos de Administrador:", error);
        return false;
    }
};

module.exports = uploadProductPermission;