// Require external libraries
var express = require('express');
var app = express();
var path = require('path');
// var mysql = require('mysql');
var connection = require('../controllers/connections.js');

// Initializes the connection variable to sync with a MySQL database
// if (process.env.JAWSDB_URL) {
//   connection = mysql.createConnection(process.env.JAWSDB_URL);
// } else {
//   connection = mysql.createConnection({
//   host: "localhost",

//   // Your port; if not 3306
//   port: 3306,

//   // Your username
//   user: "root",

//   // Your password
//   password: "password",
//   database: "friendfinder"
// });
// }

// Connecting apiRoutes to server.js, making sure routes are available when server.js is running
module.exports = function (app) {

  // get route for /categories - display all categories to the browser
  app.get('/categories', function (req, res) {
    connection.query('SELECT * FROM categories', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });

   // get route for /users - display all categories to the browser
   app.get('/users', function (req, res) {
    connection.query('SELECT * FROM users', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });

   // get route for /businesses - display all categories to the browser
   app.get('/businesses', function (req, res) {
    connection.query('SELECT * FROM businesses', function (error, results, fields) {
      if (error) throw error;
      res.json(results);
    });
  });

}

// Sign Up Form Data
app.get('/signup', function(req, res){
  connection.query("INSERT INTO users (username, email, password_hash, isABusiness", [req.query.username, req.query.email, req.query.pass, req.query.bus],
  function(err, results, fields){
    if(err) console.log('there was an error');
    res.redirect('/start')
  })
})


//log in form data
//name for email = req.query.emaillogin
//name for password = req.query.passlogin





