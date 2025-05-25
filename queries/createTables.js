const pool = require("../config/db_pgsql"); // Configuracion de la BBDD

const createTables = async () => {
    try {
        await pool.query(`
            CREATE TABLE IF NOT EXISTS users (
                id_user SERIAL PRIMARY KEY,
                user_name VARCHAR(50) NOT NULL UNIQUE,
                name VARCHAR(100) NOT NULL,
                email VARCHAR(100) NOT NULL,
                user_password TEXT NOT NULL,
                role VARCHAR(20) NOT NULL CHECK (role IN ('admin', 'user'))
            );

            CREATE TABLE IF NOT EXISTS favorite_matches  (
                id_favorite_match SERIAL PRIMARY KEY,
                id_user INTEGER NOT NULL,
                fixture_id INTEGER NOT NULL,
                FOREIGN KEY (id_user) REFERENCES users(id_user) ON DELETE CASCADE,
                FOREIGN KEY (fixture_id) REFERENCES matches(fixture_id) ON DELETE CASCADE,
                UNIQUE (id_user, fixture_id)
            );

            CREATE TABLE IF NOT EXISTS standings (
                id_standing SERIAL PRIMARY KEY,
                position INTEGER NOT NULL,
                team_name VARCHAR(100) NOT NULL,
                points INTEGER NOT NULL,
                games_played INTEGER NOT NULL,
                games_win INTEGER NOT NULL,
                games_draw INTEGER NOT NULL,
                games_lost INTEGER NOT NULL,
                logo VARCHAR(400) NOT NULL
            );

            CREATE TABLE IF NOT EXISTS matches (
                fixture_id SERIAL PRIMARY KEY,
                home_team VARCHAR(100) NOT NULL,
                home_team_id INTEGER NOT NULL,
                home_team_logo VARCHAR(400) NOT NULL,
                away_team VARCHAR(100) NOT NULL,
                away_team_id INTEGER NOT NULL,
                away_team_logo VARCHAR(400) NOT NULL,
                home_score INTEGER,
                away_score INTEGER,
                date TIMESTAMP WITH TIME ZONE NOT NULL
                );
            `);

        console.log("Tablas 'persons' y 'favorites' creadas con éxito.");
    } catch (err) {
        console.error("Error creando tablas:", err);
    } finally {
        pool.end();
    }
};

console.log("Conectado a la base: ", process.env.DB_DATABASE)

createTables();