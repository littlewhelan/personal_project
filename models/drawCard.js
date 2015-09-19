var express = require('express');
var router = express.Router();
var cards = require('./models/cards');

var card = {
//this will separate the top card from the deck
    drawCard: function() {
      return cards.theDeck().shift();
  }
};

module.exports = card;