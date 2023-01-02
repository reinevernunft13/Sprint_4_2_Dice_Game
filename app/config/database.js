require('dotenv').config();

//mySql config 
const mysqlConfig = {
  port: process.env.MYSQL_PORT,
  host: process.env.MYSQL_HOST,
  username: process.env.MYSQL_USERNAME,
  password: process.env.MYSQL_PASSWORD
};

module.exports = {
  mysqlConfig
};

/*since .env loads variables to process.env object, we need to call 
here process.env.VARIABLE */