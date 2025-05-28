const pool = require('../config/db_pgsql');
const queries = require('../queries/api.queries');

// GET all favorite matches
const getAllFavoriteMatches = async () => {
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.getFavoriteMatches);
        result = data.rows;
        const matches = [];

        for (let i = 0; i < result.length ; i++) {
            const match = result[i];
            const id = match.fixture_id;
            const getMatchById = await client.query (queries.getMatchesById, [id]);
            const row = getMatchById.rows;
            const matchResult = row[0];

            //Formatear la fecha ya
            if (matchResult && matchResult.date) {
                const dateObject = new Date(matchResult.date);
                matchResult.date = dateObject.getDate() + "/" + (dateObject.getMonth() + 1) + "/" + dateObject.getFullYear();
            }

            matches.push(matchResult)
        }
        return matches;
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }

};

// POST a favorite match
const createFavoriteMatch = async (favorite_matches) => {
    const {fixture_id} = favorite_matches;
    let client, result;
    try {
        client = await pool.connect();
        const data = await client.query(queries.createFavoriteMatch,[
            fixture_id
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

module.exports = {
    getAllFavoriteMatches,
    createFavoriteMatch
}