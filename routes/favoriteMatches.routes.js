const express = require('express');
const router = express.Router();
const favoriteMatchesControllers = require('../controllers/favoriteMatches.controllers');

//Obtener todos los partidos favoritos
router.get('/', favoriteMatchesControllers.getAllFavoriteMatches);

module.exports = router;