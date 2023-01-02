'use strict'

const Throw = require('../models/throw_mysql');
const Player = require('../models/player_mysql.js');
const { rollDice, calculateWinRate } = require('../helpers/game');

//player throws dice
const playGame = async (req, res) => {
    const playerId = req.params.id;
    const { dice1, dice2, result, isWinner } = rollDice();

    try {
        const findPlayer = await Player.findByPk(playerId);
        
        if(!findPlayer) {
            res.status(400).send({ message: "Player not found"}); 
        }
        
        const myThrow = await Throw.create({
            dice1,
            dice2,
            result,
            isWinner,
            playerId
        });
    
      calculateWinRate(findPlayer);
      res.status(200).json({ myThrow });
    
    } catch (err) { 
      res.status(500).send({ message: err.message });
    }
};

//clears player throw history
const clearThrows = async (req, res) => {

  const { id } = req.params;
  try {

    const foundPlayer = await Player.findByPk(id);
    if (!foundPlayer) {
      res.status(400).send('Player not found');
    } 
    //delete throw record
    await Throw.destroy({
        where: { playerId: id }
      });
      await Player.update(
        { winRate: null },
        { where: { id: id }}
      );
    //foundPlayer.successRate = null;
  //await foundUser.save();

    res.status(200).json({ 
      foundPlayer
     });
    } catch(err) { 
      res.status(500).send({ message: err.message });
  }
};

const getThrowsPlayer = async (req, res) => {

  const { id } = req.params;
  
  try {
    
    const throws = await Throw.findAll({
      where: { playerId: id },
    });

    res.status(200).json({ throws });
  } catch(error) {
    return res.status(404).json({ message: error });
  }
};

module.exports = {
    playGame,
    clearThrows,
    getThrowsPlayer
}

