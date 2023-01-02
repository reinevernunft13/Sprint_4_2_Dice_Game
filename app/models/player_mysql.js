'use strict';

const { sequelize } = require('../db/db_mysql');
const { Model, DataTypes } = require('sequelize');

class Player extends Model {};
Player.init({
//Attributes defined here:
  id: {
    type: DataTypes.INTEGER,
    autoIncrement: true,
    primaryKey: true
  },
  name: {
    type: DataTypes.STRING,
    allowNull: false,
    defaultValue: 'anonymous',
  },
  /*registration_date: { -> //By default is false 
    type: DataTypes.DATE, 
    defaultValue: DataTypes.NOW 
  },*/
  winRate: { 
    type: DataTypes.DECIMAL(5,2), 
    defaultValue: 0, 
  }
}, 
{ //Other model options:
    sequelize, //connection instance
    modelName: 'player' //model name
});


module.exports =  Player;

/* Tests
const player = new Player({ id: 1});
console.log(player.id);
*/

//COMMENTS:
/*
A model is an abstraction that represents a table in your database. In Sequelize, it is a class that extends Model.
A model in Sequelize has a name. By default, this name will NOT be the same name of the table it represents in the database. 
  > HOW? When we create a database, it will create tables in accordance with our Model. BUT while the model will have 
    a singular name, the corresponding table will have a pluralized name. 
        !! Sequelize automatically pluralizes the model name and uses that as the table name.
        WHY? Usually, models have singular names (e.g. Player) while tables have pluralized names (Players).
  > This is configurable: https://sequelize.org/docs/v6/core-concepts/model-basics/        

*/



/* 
https://sequelize.org/docs/v6/core-concepts/model-basics/

Models can be created in two equivalent ways in sequelize:
1) Calling sequelize.define(modelName, attributes, options)
2) Extending Model and calling init(attributes, options)

I'm choosing 1) because I find the code more readable.

*/