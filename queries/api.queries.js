const queries = {
    getAllUsers: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users WHERE id = $1',
    createUser: 'INSERT INTO users (user_name, name, email, user_password, role) VALUES ($1, $2, $3, $4, $5)',

    getAllmatches: 'SELECT * FROM matches',
    createMatch: 'INSERT INTO matches (home_team, home_team_id, home_team_logo ,away_team, away_team_id, away_team_logo ,home_score, away_score, date) VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9)',
    updateMatch: 'UPDATE matches SET home_team = $1, home_team_id = $2, away_team = $3, away_team_id = $4, home_score = $5, away_score = $6, date = $7 WHERE fixture_id = $8',
    
    deleteMatch: 'DELETE FROM matches WHERE fixture_id = $1',

    getStandings: 'SELECT * FROM standings',
    
    // Agregar favoritos
    getFavoriteMatches: 'SELECT * FROM favorite_matches WHERE id_user = 2',
    getMatchesById: 'SELECT * FROM matches WHERE fixture_id = $1',
    createFavoriteMatch: 'INSERT INTO favorite_matches (id_user, fixture_id) VALUES (2, $1)'
};

module.exports = queries;