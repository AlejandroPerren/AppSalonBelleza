const Usuario = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config()

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) throw new Error("Por favor ingrese su correo");
        if (!password) throw new Error("Por favor ingrese su contraseña");

        const user = await Usuario.findOne({ where: { email } });
        if (!user) throw new Error("Usuario o contraseña incorrectos");

        const checkPass = await bcrypt.compare(password, user.password);
        if (!checkPass) throw new Error("Usuario o contraseña incorrectos");

        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, { expiresIn: '4h' });
        await user.update({ token });

        res.status(201).json({
            message: "Usuario ingresado con éxito",
            token,
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error en el servidor", error });

    }
};

module.exports = { Login };
