var express = require('express');
var router = express.Router();
var cards = require('../models/cards');

//set the route for the deal button
router.get('/', function(req, res, next) {

    //should use the cards model to crete a deck of cards

   // console.log(cards.theDeck());
    console.log(cards.deck());


    res.render('index');


});

module.exports = router;
