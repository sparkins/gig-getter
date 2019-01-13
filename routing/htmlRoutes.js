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

  app.get('/findcontractor', function(req, res){
    res.sendFile(path.join(__dirname, '/../public/findcontractor.html'));
  })

  app.get('/postad', function(req, res){
    res.sendFile(path.join(__dirname, '/../public/postad.html'));
  })

  app.get('/start', function(req, res){
    res.sendFile(path.join(__dirname, '/../public/start.html'));
  })

  app.get('/backgroundimage', function(req, res){
    res.sendFile(path.join(__dirname, '/../public/images/bluewave.jpg'));
  })

  app.get('/workersimage', function(req, res){
    res.sendFile(path.join(__dirname, '/../public/images/workers.png'));
  })

  app.get('/gifimage', function(req, res){
    res.sendFile(path.join(__dirname, '/../public/images/blue.gif'));
  })

}

