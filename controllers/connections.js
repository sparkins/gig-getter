var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
  password: "Sql506087",
  database: "giggetter_db"
});

connection.connect(function(err) {
    if (err) throw err;
});

module.exports = connection;