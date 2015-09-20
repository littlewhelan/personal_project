var express = require('express');
var router = express.Router();
var cards = require('./cards');

//this will separate the top card from the deck
    drawCard = function() {
      return cards.theDeck().shift();
};

module.exports =drawCard;