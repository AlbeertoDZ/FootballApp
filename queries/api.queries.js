const queries = {
    getAllUsers: 'SELECT * FROM users',
    getUserById: 'SELECT * FROM users WHERE id = $1',
    createUser: 'INSERT INTO users (user_name, name, email, user_password, role) VALUES ($1, $2, $3, $4, $5)',

    getAllmatches: 'SELECT * FROM matches',
    createMatch: 'INSERT INTO matches (home_team, home_team_id, away_team, away_team_id, home_score, away_score, date) VALUES ($1, $2, $3, $4, $5, $6, $7)',
    updateMatch: 'UPDATE matches SET home_team = $1, home_team_id = $2, away_team = $3, away_team_id = $4, home_score = $5, away_score = $6, date = $7 WHERE fixture_id = $8',
    // Mirar BBDD para ver que columna podria coger para editar
    deleteMatch: 'DELETE FROM matches WHERE fixture_id = $1',

    getStandings: 'SELECT * FROM standings',
    // create....: nuevo equipo?
};

module.exports = queries;