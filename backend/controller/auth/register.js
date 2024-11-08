const Usuario = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config()

const Register = async (req, res) => {
    try {
        const { nombre, apellido, telefono, email, password } = req.body;

        const user = await Usuario.findOne({ where: { email } });
        if (user) {
            return res.status(400).json({ message: "Este Correo ya está registrado" });
        }

        const hashedPassword = await bcrypt.hash(password, 10);

        const newUser = await Usuario.create({
            nombre,
            apellido,
            telefono,
            email,
            password: hashedPassword,
        });
        res.status(201).json({
            message: "Usuario Creado con Éxito"
        });
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = { Register };
