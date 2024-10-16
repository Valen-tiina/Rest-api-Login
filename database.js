const { Sequelize } = require('sequelize'); // Importar Sequelize
require('dotenv').config(); // Cargar variables de entorno

// Comprobar si las variables de entorno se están cargando correctamente
console.log('DB_NAME:', process.env.DB_NAME);
console.log('DB_USER:', process.env.DB_USER);
console.log('DB_PASSWORD:', process.env.DB_PASSWORD);
console.log('DB_HOST:', process.env.DB_HOST);

// Crear una nueva instancia de Sequelize usando las variables de entorno
const sequelize = new Sequelize(process.env.DB_NAME, process.env.DB_USER, process.env.DB_PASSWORD, {
    host: process.env.DB_HOST,
    dialect: 'mysql',
    port: 3000 // Especificar el puerto aquí
});

// Exportar la instancia de Sequelize
module.exports = sequelize;