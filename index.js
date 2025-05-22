const express = require("express");
const app = express();

require('dotenv').config();// Cargar variables de entorno

//RUTAS

//GET http://localhost:3000/


// Iniciar el servidor
const PORT = 3000;
app.listen(PORT, () => {
  console.log(`Hola, servidor en http://localhost:${PORT}`);
});