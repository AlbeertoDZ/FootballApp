const pool = require('../config/db_pgsql'); // Configuracion de la BBDD
const queries = require('../queries/api.queries'); // Consultas SQL

// GET Tabla clasificacion
const getStandings = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getStandings);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

module.exports = {
    getStandings
}