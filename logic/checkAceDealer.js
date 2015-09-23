var express = require('express');
var router = express.Router();
var track = require('./trackingDeck');
var score = require('./scoreVars');


//this will if there is an ace in either the dealer hand

var checkAceDealer = function(array) {
    var aceHigh = 0;
        array.forEach(function(element) {
            if (element.name == 'Ace') {
                aceHigh = score.dealerScore + 10;
            }
            return aceHigh;
        });
            if(aceHigh == 21) {
                score.dealerScore = 21;
            } else if (aceHigh > score.dealerScore && aceHigh < 21 ) {
                score.dealerScore = aceHigh;}

};


module.exports = checkAceDealer;