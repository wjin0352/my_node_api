var express = require('express');
var bodyParser = require('body-parser');

module.exports = function(app) {
  // put all html files in /public folder
  app.use(express.static('public'));
  app.use(bodyParser.json());
  app.use(bodyParser.urlencoded({
    extended: false
  }));
}
