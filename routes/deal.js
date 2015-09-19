var express = require('express');
var router = express.Router();
var cards = require('../models/cards');
var deal = require('../models/deal');
var arrays = require('../models/hands');

//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    deal();
    console.log(deal(),arrays.dealerArray,arrays.playerArray);


    res.render('index');
});

module.exports = router;
