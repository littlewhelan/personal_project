var express = require('express');
var router = express.Router();
//var cards = require('../models/cards');

//set the route for the hit button
router.get('/', function(req, res, next) {
    res.render('index');
});

module.exports = router;