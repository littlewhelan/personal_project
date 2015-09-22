var express = require('express');
var router = express.Router();
var track = require('./trackingDeck');
var score = require('./scoreVars');

//this will if there is an ace in either the dealer hand

var checkAceDealer = function(array){

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
                score.dealerScore = aceHigh;
            }


    };

    //for each loop like when totaling scores
    //call in the score function--what is the total when the value of the ace is set to 1


    //what is the total when the value of the ace is set to 11 -- this will just have to add 10 to the other score

    //compare these two values and choose which to use

    //if 21 use
    // if over 21 reject
    //if player hits again -- needs to run again
    //needs to run if double button is hit
    // needs to run if stay button is used






module.exports = checkAceDealer;