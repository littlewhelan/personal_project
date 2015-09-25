var express = require('express');
var router = express.Router();
var track = require('../trackingDeck');
var score = require('../scoreVars');

//this will if there is an ace in either the dealer hand

var checkAceSplit1 = function(array){

    var aceHigh = 0;
    array.forEach(function(element) {
        if (element.name == 'Ace') {
            aceHigh = score.split1Score + 10;
        }

    });

    if(aceHigh == 21) {
        score.split1Score = 21;
    } else if (aceHigh > score.split1Score && aceHigh < 21 ) {
        score.split1Score = aceHigh;
    }


};

module.exports = checkAceSplit1;