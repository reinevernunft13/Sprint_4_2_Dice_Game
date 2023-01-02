const express = require('express');
const router = express.Router();
//Import controllers
const { createPlayer, updatePlayerName, getPlayers } = require('../controllers/players.js');

;
//POST /players: creates new player
router.post('/players', createPlayer);

//PUT /players: modifies player's name
router.put('/players/:id', updatePlayerName);

//GET /players: returns a list of all registered players with each player's win rate.
router.get('/players', getPlayers);

module.exports = router;
