const Usuario = require('../../models/userModel');
const jwt = require('jsonwebtoken');
const bcrypt = require('bcrypt');
const dotenv = require('dotenv').config()

const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if(!email){
            throw new Error("por Favor Ingrese Su Correo")
        }
        if(!password){
             throw new Error("Por Favor Ingrese Su Contraseña")
        }

        const user = await Usuario.findOne({email})


        if(!user){
            throw new Error("Usuario no Encontrado")
        }
        
        const checkPass = await bcrypt.compare(password, user.password);

        console.log("Validacion de Contraseña: ", checkPass)

        if(checkPass){
        const token = jwt.sign({ id: newUser.id }, process.env.JWT_SECRET, { expiresIn: '4h' });
        await newUser.update({ token });
        res.status(201).json({
            message: "Usuario Creado con Éxito",
            token,
        });
        }else{
            throw new Error("Por favor ingrese su contraseña")
        }
       
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ message: "Error en el servidor", error });
    }
};

module.exports = { Login };
