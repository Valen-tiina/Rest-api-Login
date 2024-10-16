const jwt = require('jsonwebtoken'); // Importar jsonwebtoken

// Middleware para verificar el token JWT
const authMiddleware = (req, res, next) => {
    // Obtener el token del encabezado
    const token = req.header('Authorization')?.replace('Bearer ', '');
    if (!token) {
        return res.status(401).json({ message: 'Acceso denegado' });
    }

    try {
        // Verificar el token
        const verified = jwt.verify(token, process.env.JWT_SECRET);
        req.user = verified; // Almacenar el usuario verificado en la solicitud
        next(); // Continuar con el siguiente middleware
    } catch (error) {
        res.status(400).json({ message: 'Token no válido' });
    }
};

module.exports = authMiddleware; // Exportar el middleware
