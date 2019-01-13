// Require external libraries
var express         = require("express");
var bodyParser      = require("body-parser");
var methodOverride  = require("method-override");
var path            = require('path');

var app             = express();

app.use(bodyParser.urlencoded({ extended: false }))
app.use(methodOverride());
var connection = require('../controllers/connections.js');

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

//if the user posts an ad
app.get("/createad", function(req, res){
  //insert into categories: req.query.title
  //insert into [NEED TO MAKE TABLE COLUMN FOR THIS DATA, PREFERABLY SAME TABLE AS THE JOB TITLE/CATEGORY] req.query.jobdescription
  //job description is a block of text rather than a short string, so should use TEXT or something other than VARCHAR in the table
})