const db = require('../config/db_pgsql'); // Configuracion de la BBDD
const Standing = require('../models/standing.model'); // Modelo de clasificacion

const getStandings = async (req, res) => {
    try {
        const standings = await Standing.getStandings();
        res.status(200).json(standings);
    } catch (error) {
        console.error('Error al obtener la clasificacion:', error);
        res.status(500).json({ error: 'Error al obtener la clasificacion' });
    }
}

module.exports = {
    getStandings
}