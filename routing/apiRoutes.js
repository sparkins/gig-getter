// Require external libraries
var express = require('express');
var app = express();
var path = require('path');
// var mysql = require('mysql');
var connection = require('../controllers/connections.js');

var bcrypt = require('bcryptjs');

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


//route for business and category info ----added by Alyssa. Please join the users table as well if you can so I can acess any data from any table with this route
  app.get('/allinfo', function (req, res){
   connection.query('SELECT * FROM businesses LEFT JOIN categories ON categories.categoryId=businesses.categoryId', function(error, results, fields){
    if(error) throw error;
     res.json(results);
  })
})

// Sign Up Form Data
  app.get('/signup', function (req, res) {
    console.log(req.query.bus)
    var bus = req.query.bus;
     if (bus==="true")
       bus=1;
     else  
      bus=0;
  
      bcrypt.genSalt(10, function (err, salt) {
      bcrypt.hash(req.query.pass, salt, function (err, p_hash) {
  
      connection.query("INSERT INTO users (username, email, password_hash, isABusiness) values(?,?,?,?)", [req.query.username, req.query.email,p_hash,bus],function (err, results, fields) {
            if (err) 
            console.log('there was an error');
            else
            {
              var Id = results.insertId; 
              connection.query("select * from users where userid = (?)", [Id],function (err, rows , fields){ 
                req.session.user_id = rows[0].userId;
                req.session.email = rows[0].email;
                req.session.username = rows[0].username;
                //res.redirect('/start')
                res.render("start",{user: req.session.username})
            })           
            }
          })
      })
    })   
  })

  //                 **** check session before rendering page *****
  /*                  if (req.session.user_id && req.cookies.user_sid) 
                   {
                       res.render("index", { user: req.session.username })
                   }
                     else 
                   {
                     res.render("logon")
                   }

  */


  // Sign Up Form Data
    app.get('/signin', function (req, res) {   
      connection.query('SELECT * FROM users WHERE email = ?', [req.query.emaillogin], function (error, results, fields) {
      if (error) 
      throw error;
      if (results.length == 0) 
       {
         res.send('try again');
       }
      else 
       {
       bcrypt.compare(req.query.passlogin, results[0].password_hash, function (err, result) {
      if (result == true) 
       {
       req.session.user_id = results[0].id;
       req.session.email = results[0].email;
       req.session.username = results[0].username;
       //res.redirect('/start')
       res.render("start",{user: req.session.username})
       }
      else 
       {
      console.log(" ERROR ")
      res.redirect('/');
       }
     });
       }
    })
    }); 


 


//log in form data
//name for email = req.query.emaillogin
//name for password = req.query.passlogin





//if the user posts an ad
app.get("/createad", function(req, res){
  //insert into categories: req.query.title
  //insert into [NEED TO MAKE TABLE COLUMN FOR THIS DATA, PREFERABLY SAME TABLE AS THE JOB TITLE/CATEGORY] req.query.jobdescription
  //job description is a block of text rather than a short string, so should use TEXT or something other than VARCHAR in the table
})
}