const db = require('../config/db_pgsql'); // Configuracion de la BBDD
const User = require('../models/users.model'); // Modelo de usuario
const bcrypt = require('bcrypt'); // Libreria para encriptar contraseñas
const jwt = require('jsonwebtoken'); // Libreria para generar tokens

//Get all users
const getAllUsers = async (req, res) =>{
    try {
        const users = await User.getAllUsers(); // Obtener todos los usuarios
        res.status(200).json(users); // Enviar respuesta
    } catch (error) {
        res.status(500).json({message: 'Error al obtener los usuarios'});
    } 
}

//Get user by id
const getUserById = async (req, res) =>{
    const {id} = req.params; // Obtener id de la peticion
    try {
        const user = await User.getUserById(id); // Obtener usuario por id
        if(!user){
            return res.status(404).json({message: 'Usuario no encontrado'});
        }
        res.status(200).json(user); // Enviar respuesta
    } catch (error) {
        res.status(500).json({message: 'Error al obtener el usuario'});
    } 
}

//Create user
const createUser = async (req, res) => {
    const newUser = req.body; //{user_name, name, email, user_password, role}
    if (
        "user_name" in newUser &&
        "name" in newUser &&
        "email" in newUser &&
        "user_password" in newUser &&
        "role" in newUser
    )
    try {
        
        //Encriptar contraseña
        const saltRounds = 10; // Numero de rondas de encriptacion
        newUser.user_password = await bcrypt.hash(newUser.user_password, saltRounds);
        const response = await User.createUser(newUser); // Crear usuario en BBDD

        res.status(201).json({
            message: `Usuario creado: ${newUser.name}`,
            items_created: response,
            data: newUser
        })


    } catch (error) {
        res.status(500).json({ message: 'Error al crear el usuario' });
    }
    else {
        res.status(400).json({ message: 'Faltan campos de entrada' });
    }
}

module.exports = {
    getAllUsers,
    getUserById,
    createUser
}