'use strict'

const { Model, DataTypes } = require('sequelize');
const { sequelize } = require('../db/db_mysql');
const Player = require('./player_mysql');

class Throw extends Model {};
Throw.init({
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  dice1: {
    type: DataTypes.INTEGER
  },
  dice2: {
    type: DataTypes.INTEGER
  },
  result: {
    type: DataTypes.INTEGER
  },
  isWinner: { 
    type: DataTypes.BOOLEAN // in mySQL returns 0 or 1
    
  }
}, 
{ 
  sequelize, 
  modelName: 'throw' 
});

// TABLE ASSOCIATIONS
//1:N
Player.hasMany(Throw); 
//1:1
Throw.belongsTo(Player); //adds the playerId attribute to the Throw model as the foreign key constraint.

module.exports = Throw;




