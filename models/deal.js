var express = require('express');
var router = express.Router();
var cards = require('./cards');
var track = require('./trackingDeck');
var draw = require('./drawCard');
var newDeck = require('./newDeck');

//this will deal the first cards of both the player and the house
var deal = function() {
    if(track.startDeckArray.length <= 8){
        track.startDeckArray = newDeck();
        track.discardArray =[];
    } else {track.startDeckArray=track.startDeckArray};

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