const jwt = require('jsonwebtoken');

async function authToken(req, res, next) {
    try {
        const token = req.cookies?.token;

        console.log("token", token);
        if (!token) {
            return res.status(200).json({
                message: "Please Login...!",
                error: true,
                success: false
            });
        }

        jwt.verify(token, process.env.JWT_SECRET, function(err, decoded) {
            if (err) {
                console.log("error auth", err);
                return res.status(401).json({
                    message: "Token is not valid",
                    error: true,
                    success: false
                });
            }

            console.log("decoded", decoded);
            req.userId = decoded?._id;
            req.userName = decoded?.nombre;
            req.userRole = decoded?.rol;

            next();
        });

    } catch (err) {
        res.status(400).json({
            message: err.message || err,
            data: [],
            error: true,
            success: false
        });
    }
}

module.exports = {authToken};
