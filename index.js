const express = require("express");
const cors = require("cors");
const app = express();

require('dotenv').config();// Cargar variables de entorno

//Habilitar CORS
app.use(cors());

// Para poder leer JSON en las peticiones
app.use(express.json());

//RUTAS
//GET http://localhost:4000/
const userRoutes = require("./routes/users.routes");
const matchesRoutes = require("./routes/matches.routes");
const standingsRoutes = require("./routes/standings.routes");
const favoriteMatchesRoutes = require("./routes/favoriteMatches.routes");

//RUTAS API
app.use("/api/users", userRoutes); // http://localhost:4000/api/users
app.use("/api/matches", matchesRoutes); // http://localhost:4000/api/matches
app.use("/api/standings", standingsRoutes); // http://localhost:4000/api/standings
app.use("/api/favoriteMatches", favoriteMatchesRoutes); // http://localhost:4000/api/favoriteMatches

// Iniciar el servidor
const PORT = 4000;
app.listen(PORT, () => {
  console.log(`Servidor alojado en: http://localhost:${PORT}`);
});