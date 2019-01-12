var express = require('express');
var app = express();

var path = require('path');

var mysql = require('mysql');

app.use(express.static("public"));

module.exports = function (app) {

  app.get('/', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'))
  });

  app.get('/home', function (req, res) {
    res.sendFile(path.join(__dirname, '/../public/home.html'))
  });

}