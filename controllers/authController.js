const User = require('../models/User'); // Importar el modelo de usuario
const bcrypt = require('bcryptjs'); // Importar bcrypt para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Importar jsonwebtoken para crear tokens

// Registrar un nuevo usuario
exports.register = async (req, res) => {
    try {
        // Extraer el nombre de usuario y contraseña del cuerpo de la solicitud
        const { username, password } = req.body;

        // Comprobar si el usuario ya existe
        const existingUser = await User.findOne({ where: { username } });
        if (existingUser) {
            return res.status(400).json({ message: 'Usuario ya existe' });
        }

        // Encriptar la contraseña
        const hashedPassword = await bcrypt.hash(password, 10);

        // Crear un nuevo usuario
        const user = await User.create({
            username,
            password: hashedPassword
        });

        // Enviar respuesta
        res.status(201).json({ message: 'Usuario registrado con éxito' });
    } catch (error) {
        res.status(500).json({ message: 'Error en el registro', error });
    }
};

// Loguear un usuario
exports.login = async (req, res) => {
    try {
        // Extraer el nombre de usuario y contraseña del cuerpo de la solicitud
        const { username, password } = req.body;

        // Buscar el usuario en la base de datos
        const user = await User.findOne({ where: { username } });
        if (!user) {
            return res.status(400).json({ message: 'Usuario no encontrado' });
        }

        // Comparar la contraseña proporcionada con la almacenada
        const isMatch = await bcrypt.compare(password, user.password);
        if (!isMatch) {
            return res.status(400).json({ message: 'Contraseña incorrecta' });
        }

        // Crear un token JWT
        const token = jwt.sign({ id: user.id }, process.env.JWT_SECRET, {
            expiresIn: '1h' // El token expirará en 1 hora
        });

        // Enviar respuesta con el token
        res.status(200).json({ token });
    } catch (error) {
        res.status(500).json({ message: 'Error en el logueo', error });
    }
};
