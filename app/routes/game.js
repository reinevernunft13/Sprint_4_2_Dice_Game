const express = require('express');
const router = express.Router();
//Import controllers
const { playGame, clearThrows, getThrowsPlayer } = require('../controllers/game.js');

//POST /games/{id}: un jugador/a específic realitza una tirada.
router.post('/game/:id', playGame);

//DELETE /games/{id}: elimina les tirades del jugador/a.
router.delete('/game/:id', clearThrows);

//GET /games/{id}: retorna el llistat de jugades per un jugador/a.
router.get('/game/:id', getThrowsPlayer);

module.exports = router;