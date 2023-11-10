const express = require('express');
const cors = require('cors');
const db = require('./db');
const preciosRouter = require('./routes');

const app = express();
app.use(express.json());
app.use(cors());


app.use(preciosRouter);

// Puerto para el servidor backend
const port =  5000;
app.listen(port, () => {
  console.log(`Servidor backend en ejecución en el puerto ${port}`);
});
