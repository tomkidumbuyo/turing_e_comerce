'user strict';

var mysql = require('mysql');
require('dotenv/config');

//local mysql db connection
var connection = mysql.createConnection({
    host     : process.env.DB_HOST,
    port     : process.env.DB_PORT,
    user     : process.env.DB_USER,
    password : process.env.DB_PASSWORD,
    database : process.env.DB_DATABASE
});


connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;