var express = require('express');
var router = express.Router();
var cards = require('./models/cards');
var arrays = require('./models/hand');
var draw = require('./models/drawCard');

//this will deal the first cards of both the player and the house
var deal = function() {
    //deal a card face- up to the player
    arrays.playerArray.push(draw.drawCard());

    //deal a card face down to the dealer
    arrays.dealerArray.push(draw.drawCard());

    //deal a 2nd card face up to the player
    arrays.playerArray.push(draw.drawCard());

    //deal a 2nd card face up to the dealer
    arrays.dealerArray.push(draw.drawCard());
};

module.exports = deal;