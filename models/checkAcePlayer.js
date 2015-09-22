var express = require('express');
var router = express.Router();
var track = require('./trackingDeck');
var score = require('./scoreVars');

//this will if there is an ace in either the dealer hand

var checkAcePlayer = function(array){

    var aceHigh = 0;
    array.forEach(function(element) {
        if (element.name == 'Ace') {
            aceHigh = score.playerScore + 10;
          }

    });

    if(aceHigh == 21) {
        score.playerScore = 21;
    } else if (aceHigh > score.playerScore && aceHigh < 21 ) {
        score.playerScore = aceHigh;
    }


};

module.exports = checkAcePlayer;