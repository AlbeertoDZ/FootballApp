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

//POST Crear favorite matches
const createFavoriteMatch = async (req, res) => {
    const newFavoriteMatch = req.body; //{id_user, fixture_id}
    if (
        "fixture_id" in newFavoriteMatch
    )
        try {
            const favoriteMatch = await FavoriteMatch.createFavoriteMatch(newFavoriteMatch);
            res.status(201).json({ message: 'Partido favorito creado correctamente', favoriteMatch });
        } catch (error) {
            res.status(500).json({ message: 'Error al crear el partido favoritos' });
        }
    else {
        res.status(400).json({ error: 'Faltan datos para crear el favorito' });
    }
}

module.exports = {
    getAllFavoriteMatches,
    createFavoriteMatch
}