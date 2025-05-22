const pool = require('../config/db_pgsql'); // Configuracion de la BBDD
const queries = require('../queries/api.queries'); // Consultas SQL

//GET
const getAllUsers = async () => {
    let client, result;
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getAllUsers); 
        result = data.rows; 
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}

//GET by id
const getUserById = async (id) => {
    let client, result;
    try {
        client = await pool.connect(); 
        const data = await client.query(queries.getUserById, [id]); 
        result = data.rows[0]; 
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
};

//POST 
const createUser = async (user) => {
    const {user_name, name, email, user_password, role} = user; // Desestructuracion del objeto
    let client, result;
    try {
        client = await pool.connect(); // Conectar a la BBDD
        const data = await client.query(queries.createUser, [
            user_name, 
            name, 
            email, 
            user_password, 
            role]); // Ejecutar la consulta
        result = data.rowCount
    } catch (error) {
        console.log(error);
        throw error;
    } finally {
        client.release();
    }
    return result;
}


module.exports = {
    getAllUsers,
    createUser
}