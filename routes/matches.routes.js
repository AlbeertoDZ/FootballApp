const express = require('express');
const router = express.Router();
const matchesControllers = require('../controllers/matches.controllers');

//Obtener todos los partidos
router.get('/', matchesControllers.getAllMatches);
//Crear un partido
router.post('/', matchesControllers.createMatch);
//Eliminar un partido
router.delete('/:fixture_id', matchesControllers.deleteMatch);

module.exports = router;