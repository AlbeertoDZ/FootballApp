const db = require('../config/db_pgsql');
const FavoriteMatch = require('../models/favoriteMatches.model');

//Get all favorite matches
const getAllFavoriteMatches = async (req, res) => {
    try {
        const favoriteMatches = await FavoriteMatch.getAllFavoriteMatches(); 
        res.status(200).json(favoriteMatches); 
    } catch (error) {
        res.status(500).json({ message: 'Error al obtener los partidos favoritos' });
    }
};

module.exports = {
    getAllFavoriteMatches
}