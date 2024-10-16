const express = require('express'); // Importar express
const { register, login } = require('../controllers/authController'); // Importar funciones del controlador

// Crear un enrutador
const router = express.Router();

// Ruta para registrar un usuario
router.post('/register', register);

// Ruta para loguear un usuario
router.post('/login', login);

// Exportar el enrutador
module.exports = router;
