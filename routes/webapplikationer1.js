var express = require('express');
var path = require('path');
var router = express.Router();
const db = require('../database/db.js');

/* GET home page. */
router.get('/', function(req, res, next) {
  db.getAllBooks(function(err, books) {
    if (err) {
      next(err);
    } else {
      res.render('webapplikationer1', { books: books });
    }
  });
});

module.exports = router;