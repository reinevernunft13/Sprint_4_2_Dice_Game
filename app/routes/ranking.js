const express = require('express');
const router = express.Router();

//Import controllers
const { getRanking, getLoser, getWinner } = require('../controllers/ranking.js');

//GET /ranking: returns ranking of players ordered by win rate AND average win rate of ALL players.
router.get('/ranking', getRanking);
//GET /ranking/loser: returns player with lowest win rate.
router.get('/ranking/loser', getLoser);
//GET /ranking/winner: returns player with highest win rate.
router.get('/ranking/winner', getWinner);

module.exports = router;