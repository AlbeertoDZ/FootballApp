const express = require('express');
const router = express.Router();
const favoriteMatchesControllers = require('../controllers/favoriteMatches.controllers');

//Obtener todos los partidos favoritos
router.get('/', favoriteMatchesControllers.getAllFavoriteMatches);
//Crear un favorito
router.post('/', favoriteMatchesControllers.createFavoriteMatch);

module.exports = router;