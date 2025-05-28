const express = require('express');
const router = express.Router();
const standingsControllers = require('../controllers/standing.controllers');

//Obtener la clasificacion
router.get('/', standingsControllers.getStandings);

module.exports = router