'use strict'

require('dotenv').config();
const express = require('express');
const app = express();

const { connectSequelize } = require('./app/db/db_mysql.js');

connectSequelize();

//IMPORT ROUTES

const players_routes = require('./app/routes/players');
const game_routes = require('./app/routes/game');
const ranking_routes = require('./app/routes/ranking');

//MIDDLEWARES 
//Body-parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/', players_routes);
app.use('/', game_routes);
app.use('/', ranking_routes);

//invalid route handling
app.use((req, res, next)=> {
    res.status(404).json({ message: "Bad request: Route Not Found" });
  });  

//STARTS SERVER
app.listen(process.env.API_PORT, () => {
    console.log('API Server running on port ' + process.env.API_PORT);
});