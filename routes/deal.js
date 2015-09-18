var express = require('express');
var router = express.Router();
var cards = require('../models/cards');

//this will get the cards to deal the hand
router.get('/', function(req, res, next) {

    var deckOfCards = cards.theDeck();
   console.log(deckOfCards);

    res.render('index');
});

module.exports = router;
