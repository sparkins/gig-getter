// Require external libraries
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');

// var mysql = require('mysql');
var connection = require('../controllers/connections.js');

var bcrypt = require('bcryptjs');

var app = express();

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

    //route for business and category info ----added by Alyssa. Please join the users table as well if you can so I can acess any data from any table with this route
    app.get('/allinfo', function (req, res) {
        connection.query('SELECT * FROM businesses LEFT JOIN categories ON categories.categoryId=businesses.categoryId', function (error, results, fields) {
            if (error) throw error;
            res.json(results);
        })
    })

    // Sign Up Form Data
    app.get('/signup', function (req, res) {
        console.log(req.query.bus)
        var bus = req.query.bus;
        if (bus === "true")
            bus = 1;
        else
            bus = 0;

        bcrypt.genSalt(10, function (err, salt) {
            bcrypt.hash(req.query.pass, salt, function (err, p_hash) {

                connection.query("INSERT INTO users (username, email, password_hash, isABusiness) values(?,?,?,?)", [req.query.username, req.query.email, p_hash, bus], function (err, results, fields) {
                    if (err)
                        console.log('there was an error');
                    else {
                        var Id = results.insertId;
                        connection.query("select * from users where userid = (?)", [Id], function (err, rows, fields) {
                            req.session.user_id = rows[0].userId;
                            req.session.email = rows[0].email;
                            req.session.username = rows[0].username;
                            //res.redirect('/start')
                            res.render("start", { user: req.session.username })
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
            if (results.length == 0) {
                res.send('try again');
            }
            else {
                bcrypt.compare(req.query.passlogin, results[0].password_hash, function (err, result) {
                    if (result == true) {
                        req.session.user_id = results[0].id;
                        req.session.email = results[0].email;
                        req.session.username = results[0].username;
                        //res.redirect('/start')
                        res.render("start", { user: req.session.username })
                    }
                    else {
                        console.log(" ERROR ")
                        res.redirect('/');
                    }
                });
            }
        })
    });

    //insert into categories: req.query.title
    app.post('/categories/add-category', function (req, res) {
        console.log(req.query);
        connection.query('INSERT INTO categories (category_name) VALUES (?)', [req.query.categoryName], function (err, res) {
            if (err) {
                console.log('there was an error');
                return res.status(500).end();
            }
            console.log('Category: ' + req.query.categoryName + 'was added');
            res.redirect('/categories');
        })
    })

    //route for business and category info ----added by Alyssa. Please join the users table as well if you can so I can acess any data from any table with this route
    app.get('/allinfo', function (req, res) {
        connection.query("SELECT b.businessId AS BusinessID, b.business_name AS CompanyName, b.categoryId AS CategoryID, c.category_name AS CategoryName FROM businesses b LEFT JOIN categories c ON c.categoryId=b.categoryId;"
            , function (error, results) {
                console.log(results);
                if (error) throw error;
                res.json(results);
            })
    })

    //route for providing the average rating for a business
    app.get('/businesses/rating/:businessId', function (req, res) {
        connection.query("SELECT b.businessId, b.business_name, j.rating FROM businesses b LEFT JOIN jobs j ON j.businessId=b.businessId WHERE b.businessId = ?", [req.params.businessId]
            , function (error, results) {
                // console.log(results[0].rating);
                if (error) throw error;
                var ratingArray = [];
                for (i = 0; i < results.length; i++) {
                    console.log(results[i].rating);
                    ratingArray.push(results[i].rating)
                }
                var sum = ratingArray.reduce(function (total, currentVal) {
                    return total + currentVal;
                })
                res.send(`Average Rating for ${results[0].business_name} = ${(sum / results.length).toFixed(2)}`);
            })
    })

    //route for providing a list of reviews for a  specific business
    app.get('/businesses/reviews/:businessId', function (req, res) {
        connection.query("SELECT b.businessId, b.business_name, j.review FROM businesses b LEFT JOIN jobs j ON j.businessId=b.businessId WHERE b.businessId = ?", [req.params.businessId]
            , function (error, results) {
                //console.log(results);
                if (error) throw error;
                res.json(results);
            })
    })



}
//log in form data
//name for email = req.query.emaillogin
//name for password = req.query.passlogin

//if the user posts an ad
app.get("/createad", function (req, res) {

})
