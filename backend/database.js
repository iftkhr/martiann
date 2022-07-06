var dotenv = require('dotenv');
var mysql = require('mysql');

dotenv.config();

var database = mysql.createConnection({
  host: process.env.host,
  user: process.env.user,
  password: process.env.password,
  port: process.env.port,
  database: process.env.database
});

module.exports = database;

