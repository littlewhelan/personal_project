var express = require('express');
var router = express.Router();
var cards = require('./cards');

//this will separate the top card from the deck
var initDeck = cards.theDeck();


module.exports = initDeck;