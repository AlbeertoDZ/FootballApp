const db = require('../config/db_pgsql'); //
const Matches = require('../models/matches.model'); // Modelo de partidos
const bcrypt = require('bcrypt');

const getAllMatches = async (req, res) => {
    try {
        const matches = await Matches.getAllMatches();
        res.status(200).json(matches);
    } catch (error) {
        console.error('Error al obtener los partidos:', error);
        res.status(500).json({ error: 'Error al obtener los partidos' });
    }
}
const createMatch = async (req, res) => {
    const newMatch = req.body; //{home_team, home_team_id, away_team, away_team_id, home_score, away_score, date}
    if (
        "home_team" in newMatch &&
        "home_team_id" in newMatch &&
        "away_team" in newMatch &&
        "away_team_id" in newMatch &&
        "home_score" in newMatch &&
        "away_score" in newMatch &&
        "date" in newMatch
    )
    try {
        const match = await Matches.createMatch(newMatch);
        res.status(201).json({ message: 'Partido creado correctamente', match });
    } catch (error) {
        res.status(500).json({ error: 'Error al crear el partido' });
    }
    else {
        res.status(400).json({ error: 'Faltan datos para crear el partido' });
    }
}
const deleteMatch = async (req, res) => {
    const {fixture_id} = req.params;

    try {
        const response = await Matches.deleteMatch(fixture_id);
        if (response) {
            res.status(200).json({ 
                message: 'Partido eliminado correctamente',
                items_deleted: response,
                data: fixture_id
            });
        } else {
            res.status(404).json({ error: 'Partido no encontrado' });
        }
    } catch (error) {
        res.status(500).json({ error: 'Error al eliminar el partido' });
        
    }
}
module.exports = {
    getAllMatches,
    createMatch,
    deleteMatch
}