'use strict'

const Player = require('../models/player_mysql.js');

const createPlayer = async (req, res) => {
  
  const name = req.body.name;
  let player;
  try {
    //finds player by name 
    if(name) {
        const foundName = await Player.findOne({
            where: { name: name }
        });

        if(foundName){
            return res.status(400).send({ 
                error: "Sorry, this username is already in use. Please, try a different one."}); 
        }

        player = await Player.create({ name: name });

    } else {
        
        player = await Player.create();
    }
        
        res.status(200).send({
            message: `User ${player.name} has succesfully been created.`,
            data: {
                id: player.id,
                name: player.name
            }
        });
        
 } catch (err) {
    res.status(500).send({ message: err.message });
}
};

//modifies player's name
const updatePlayerName = async (req,res) => {

  try {
      const id = req.params.id;
      const name = req.body.name;

      //finds player by id
      const findPlayer = await Player.findByPk(id);
      //if no matches are found for id
      if (!findPlayer) {
          return res.status(400).send({ message: 'Player not found.'})
      }
     
      //finds if new name for player is unique
      const findName = await Player.findOne({ 
        where: { name: name } 
      });

      if(findName){
          return res.status(400).send({ message: 'Error. This username is already in use.'});
      }
      
     //updates name if there's a matching id 
   const updated = await Player.update(
      { name: name },
      { where: { id: id } }
    );
    res.status(200).send({ message: `Player name has been successfully updated.` });

  } catch(err) {
          res.status(500).send({ message: err.message });
  }
};
//returns list of all players with their win rate
const getPlayers = async(req, res) => {
  
  try {
    
    const players = await Player.findAll();
    /*if(players === 'null') {
      return res.status(204).json({ message: 'No content'});
    } */
    return res.status(200).json({ players });

  } catch (err) {
    return res.status(500).send({ message: err.message });
  }
};
 
  
module.exports = {
  createPlayer, 
  updatePlayerName,
  getPlayers
};