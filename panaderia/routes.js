const express = require('express');
const db = require('./db'); //conexion a la base de datos
const router = express.Router();

// Ruta para obtener los precios de la tabla "precios"
router.get('/api/precios', (req, res) => {
  const sql = 'SELECT costo FROM precios';
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener los precios:', err);
      res.status(500).send('Error del servidor');
    } else {
      res.json(result);
    }
  });
});

// Ruta para agregar un nuevo precio a la tabla "precios"
router.post('/api/precios/agregar', (req, res) => {
  const { costo } = req.body;
  const sql = 'INSERT INTO precios (costo) VALUES (?)';
  console.log('Valor recibido en el servidor:', costo);
  db.query(sql, [costo], (err, result) => {
    if (err) {
      console.error('Error al agregar el precio:', err);
      res.status(500).send('Error del servidor');
    } else {
      res.status(201).send('Precio agregado correctamente');
    }
  });
});

// Ruta para obtener las cantidades de la tabla "cantidades"
router.get('/api/cantidades/finales', (req, res) => {
  const sql = `
    SELECT p.id, p.costo, c.cantidad
    FROM precios p
    INNER JOIN cantidades c ON p.id = c.id;
  `;
  
  db.query(sql, (err, result) => {
    if (err) {
      console.error('Error al obtener las cantidades:', err);
      res.status(500).send('Error del servidor');
    } else {
      res.json(result);
    }
  });
});


module.exports = router;
