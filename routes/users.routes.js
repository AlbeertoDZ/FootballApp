const express = require('express');
const router = express.Router();
const usersControllers = require('../controllers/users.controller');

//OBTENER TODOS LOS USUARIOS
router.get('/', usersControllers.getAllUsers);

//OBTENER USUARIO POR ID
router.get('/:id', usersControllers.getUserById);

//CREAR USUARIO
router.post('/', usersControllers.createUser);


module.exports = router;
