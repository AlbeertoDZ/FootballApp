const pool = require('../config/db_pgsql'); // Configuracion de la BBDD
const queries = require('../queries/api.queries'); // Consultas SQL

//GET Todos los partidos
const getAllMatches = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getAllmatches);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

//POST Crear un partido
const createMatch = async (match) => {
    const { home_team, home_team_id, home_team_logo, away_team, away_team_id, away_team_logo, home_score, away_score, date } = match;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createMatch, [
            home_team,
            home_team_id,
            home_team_logo,
            away_team,
            away_team_id,
            away_team_logo,
            home_score,
            away_score,
            date
        ]);
        result = data.rowCount;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

//DELETE Eliminar un partido
const deleteMatch = async (fixture_id) => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.deleteMatch, [fixture_id]);
        result = data.rowCount;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

module.exports = {
    getAllMatches,
    createMatch,
    deleteMatch
}