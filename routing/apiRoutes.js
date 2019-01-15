// Require external libraries
var express = require("express");
var bodyParser = require("body-parser");
var methodOverride = require("method-override");
var path = require('path');

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
    app.get('/businesses/ave-rating/:id', function (req, res) {
        connection.query("SELECT b.businessId, b.business_name, j.rating FROM businesses b LEFT JOIN jobs j ON j.businessId=b.businessId WHERE b,businessId = 'id';"
            , function (error, results) {
                console.log(results);
                if (error) throw error;
                res.json(results);
            })
    })

    // Sign Up Form Data
    app.get('/signup', function (req, res) {
        connection.query("INSERT INTO users (username, email, password_hash, isABusiness", [req.query.username, req.query.email, req.query.pass, req.query.bus],
            function (err, results, fields) {
                if (err) console.log('there was an error');
                res.redirect('/start')
            })
    })

}
//log in form data
//name for email = req.query.emaillogin
//name for password = req.query.passlogin

//if the user posts an ad
app.get("/createad", function (req, res) {



    //insert into [NEED TO MAKE TABLE COLUMN FOR THIS DATA, PREFERABLY SAME TABLE AS THE JOB TITLE/CATEGORY] req.query.jobdescription
    //job description is a block of text rather than a short string, so should use TEXT or something other than VARCHAR in the table
})