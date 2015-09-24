var express = require('express');
var router = express.Router();
var cards = require('../logic/cards');
var track = require('../logic/trackingDeck');
var draw = require('../logic/drawCard');
var newDeck = require('../logic/newDeck');
var bank = require('../logic/bankVars');


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
    track.split1Array.push(draw());
};

module.exports = deal;