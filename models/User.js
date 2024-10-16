const { DataTypes } = require('sequelize'); // Importar DataTypes de Sequelize
const sequelize = require('../database'); // Importar la conexión de la base de datos

// Definir el modelo de usuario
const User = sequelize.define('User', {
    username: {
        type: DataTypes.STRING, // Tipo de dato para el nombre de usuario
        allowNull: false, // No puede ser nulo
        unique: true // Debe ser único
    },
    password: {
        type: DataTypes.STRING, // Tipo de dato para la contraseña
        allowNull: false // No puede ser nulo
    }
});

// Exportar el modelo
module.exports = User;
