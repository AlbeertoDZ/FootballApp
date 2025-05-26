const pool = require('../config/db_pgsql');
const queries = require('../queries/api.queries');

// GET all favorite matches
const getAllFavoriteMatches = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getFavoriteMatches);
        result = data.rows;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
};

// // POST a favorite match
// const createFavoriteMatch = async 

module.exports = {
    getAllFavoriteMatches
}