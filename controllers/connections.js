var mysql = require("mysql");

var connection = mysql.createConnection({
  host: "localhost",
  port: 3306,
  user: "root",
<<<<<<< HEAD
  password: "password",
=======
  password: "root",
>>>>>>> 068ada1cf5fc63c6ada0e1d7b41e8907dd98075a
  database: "giggetter_db"
});

connection.connect(function(err) {
    if (err) {
        console.log(err);
        return err;
    } else {
        console.log("Connected");
    }
});

module.exports = connection;