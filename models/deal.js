var express = require('express');
var router = express.Router();
var cards = require('./cards');
var track = require('./trackingDeck');
var draw = require('./drawCard');

//this will deal the first cards of both the player and the house
var deal = function() {
    //deal a card face- up to the player
    track.playerArray.push(draw());

    //deal a card face down to the dealer
    track.dealerArray.push(draw());

    //deal a 2nd card face up to the player
    track.playerArray.push(draw());

    //deal a 2nd card face up to the dealer
    track.dealerArray.push(draw());
};

module.exports = deal;