const Login = async (req, res) => {
    try {
        const { email, password } = req.body;
        if (!email) throw new Error("Por favor ingrese su correo");
        if (!password) throw new Error("Por favor ingrese su contraseña");

        const user = await Usuario.findOne({ where: { email } });
        if (!user) throw new Error("Usuario o contraseña incorrectos");

        const checkPass = await bcrypt.compare(password, user.password);
        
        if (checkPass) {
            const tokenData = {
                _id: user.id,
                nombre: user.nombre,
                rol: user.rol,
            };

            const token = jwt.sign(tokenData, process.env.TOKEN_SECRET_KEY, { expiresIn: '8h' });
    
            const tokenOption = {
                httpOnly: true,
                secure: true,
            };
    
            res.cookie("token", token, tokenOption);
            res.status(200).json({
                message: "Login successfully",
                data: token,
                success: true,
                error: false
            });
        } else {
            throw new Error("Usuario o contraseña incorrectos");
        }
       
    } catch (error) {
        console.error(error);
        res.status(500).json({ success: false, message: "Error en el servidor", error });
    }
};

module.exports = {Login}