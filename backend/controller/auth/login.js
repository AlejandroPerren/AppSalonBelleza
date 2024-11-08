const Usuario = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) return res.status(400).json({ success: false, message: "Por favor ingrese su correo" });
        if (!password) return res.status(400).json({ success: false, message: "Por favor ingrese su contraseña" });

        // Buscar al usuario en la base de datos
        const user = await Usuario.findOne({ where: { email } });
        if (!user) return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });

        // Verificar la contraseña
        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });

        // Generar el token
        const token = jwt.sign(
            { id: user.id, nombre: user.nombre },
            process.env.JWT_SECRET,
            { expiresIn: '30m' }
        );

        // Enviar respuesta con el token y los datos necesarios
        res.status(200).json({
            message: "Login exitoso",
            token,
            userData: { id: user.id, nombre: user.nombre }, // Datos que necesitarás en el frontend
            success: true
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error en el servidor" });
    }
};

module.exports = { Login };
