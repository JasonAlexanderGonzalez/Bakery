require('dotenv').config(); // Cargar las variables de entorno desde .env

const mysql = require('mysql');

// Configurar conexión a la base de datos MySQL
const db = mysql.createConnection({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
});

// Conectar a la base de datos utilizando un operador ternario
db.connect((err) => {
  err
    ? console.error('Error al conectar a la base de datos:', err)
    : console.log('Conexión exitosa a la base de datos MySQL');
});

module.exports = db;
