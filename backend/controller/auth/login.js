const Usuario = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config();

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;

        if (!email) return res.status(400).json({ success: false, message: "Por favor ingrese su correo" });
        if (!password) return res.status(400).json({ success: false, message: "Por favor ingrese su contraseña" });


        const user = await Usuario.findOne({ where: { email } });
        if (!user) return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });

  
        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) return res.status(401).json({ success: false, message: "Usuario o contraseña incorrectos" });

    
        const token = jwt.sign(
            { id: user.id, nombre: user.nombre },
            process.env.JWT_SECRET,
            { expiresIn: '30m' }
        );

    
        res.status(200).json({
            message: "Login exitoso",
            token,
            userData: { id: user.id, nombre: user.nombre, rol : user.rol }, 
            success: true
        });
        
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error en el servidor" });
    }
};

module.exports = { Login };
