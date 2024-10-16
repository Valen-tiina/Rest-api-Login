const sequelize = require('./database'); // Importar la conexión de la base de datos
const User = require('./models/User'); // Importar el modelo de usuario

// Sincronizar el modelo con la base de datos
sequelize.sync()
    .then(() => console.log('Modelo de usuario sincronizado'))
    .catch(err => console.error('Error al sincronizar el modelo:', err));
