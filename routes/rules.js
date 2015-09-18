var express = require('express');
var router = express.Router();
var cards = require('../models/cards');

/* GET home page. */
router.get('/', function(req, res, next) {
    res.render('rules');
});

module.exports = router;