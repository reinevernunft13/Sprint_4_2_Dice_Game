const Throw = require('../models/throw_mysql');

const rollDice = () => {
    const dice1 = Math.floor(6 * Math.random()) + 1;
    const dice2 = Math.floor(6 * Math.random()) + 1;
    const res = dice1 + dice2;
    const isWinner = (res === 7);
    return { dice1, dice2, result: res, isWinner };
  };

const calculateWinRate = async (player) => {
    const totalThrows = await Throw.count({
        where: {
          playerId: player.id,
    
        },
      });
      const winningThrows = await Throw.count({
        where: {
          isWinner: true,
          playerId: player.id,
    
        },
      });

      player.winRate = (winningThrows / totalThrows) * 100;
      await player.save();
}



  module.exports = { 
    rollDice,
  calculateWinRate };