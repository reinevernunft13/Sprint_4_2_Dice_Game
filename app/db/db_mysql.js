const { Sequelize } = require('sequelize');
const mysql = require('mysql2/promise');
const { mysqlConfig } = require('../config/database');

//SET UP CONNECTION WITH DB
const { db_name, port, host, username, password } = mysqlConfig; 

//Instantiate sequelize to create connection
const sequelize = new Sequelize(db_name, username, password, {
  host,
  dialect: 'mysql',
  port,
  define: { 
    timestamps: false //createdAt, updated at
  },
  //default for logging true;
  //logging is set to false to disable Sequelize query logging when creating a new db connector. 
  logging: false 
});

const connectSequelize = async () => {
  
  try {
    //Connect to mysql server
    const connection = await mysql.createConnection({
      host, 
      port, 
      user: username, 
      password
    });
    console.log('Connected to MySql server!');
    // Once we're connected, we create a new db using mysql commands calling query() on the connection instance;
    await connection.query(`CREATE DATABASE IF NOT EXISTS \`${db_name}\`;`);
    console.log(`Database \'${db_name}\' successfully created.`);
    //default for sequelize.sync() force is false. When set to true, it'll fully sync between model shema Player and our db 
    await sequelize.sync({ force: false }); 
    console.log(`Connection to MySql database \'${db_name}\' established successfully!`);
  } catch (error) {
    console.error('Something went wrong. We are unable to connect to the database...', error);
  }
};

module.exports = { connectSequelize, sequelize };

//https://jasonwatmore.com/post/2022/06/26/nodejs-mysql-connect-to-mysql-database-with-sequelize-mysql2