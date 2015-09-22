var express = require('express');
var router = express.Router();
var cards = require('./cards/cards');
var track = require('./cards/trackingDeck');
var draw = require('./cards/drawCard');
var newDeck = require('./cards/newDeck');
var bank = require('./bank/bank');

//this will deal the first cards of both the player and the house
var deal = function() {
    //making sure players bank is not zero
    if(bank.playersBank == 0){
        bank.playersBank = 1000
    };

    // makes sure there are cards in the deck or shuffles up a new deck
    if(track.startDeckArray.length <= 8){
        track.startDeckArray = newDeck();
        track.discardArray =[];
    };

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