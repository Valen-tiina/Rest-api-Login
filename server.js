const express = require('express'); // Importar Express
const sequelize = require('./database'); // Importar la conexión de la base de datos
require('dotenv').config(); // Cargar las variables de entorno

const app = express();
const PORT = process.env.PORT || 3000; // Puerto por defecto

// Middleware
app.use(express.json());

// Probar la conexión a la base de datos
sequelize.authenticate()
    .then(() => console.log('Conexión a la base de datos exitosa'))
    .catch(err => console.error('No se pudo conectar a la base de datos:', err));

// Iniciar el servidor
app.listen(PORT, () => {
    console.log(`Servidor corriendo en el puerto ${PORT}`);
});