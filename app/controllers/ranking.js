'use strict'

const Player = require('../models/player_mysql.js');

const getRanking = async (req, res) => {
    
    try {
      //gets ranking  
      const ranking = await Player.findAll({
        attributes: ["id", "name", "winRate"],
        order: [["winRate", "DESC"]],
      });
  
      const players = await Player.count();
      const totalWinRates = await Player.sum("winRate");
      const average = totalWinRates / players;
  
      res.status(200).json({ 
        "Player ranking by win rate": ranking, 
        "Average win rate of all players": average 
    });
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getLoser = async (req, res) => {
    
    try {
      const loser = await Player.findOne({
        attributes: ["id", "name", "winRate"],
        order: [["winRate", "ASC"]],
      });
  
      res.status(200).json(loser);
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
  };

  const getWinner = async (req, res) => {
    
    try {
        const winner = await Player.findOne({
            attributes: ["id", "name", "winRate"],
            order: [["winRate", "DESC"]],
        });
        res.status(200).json(winner);
    
    } catch (err) {
      res.status(500).json({ message: err.message });
    }
};

  module.exports = {
    getRanking,
    getLoser,
    getWinner
  }