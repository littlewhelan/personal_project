var express = require('express');
var router = express.Router();
var score = require('../logic/scoreVars');
var track = require ('../logic/trackingDeck');
var calc = require('../logic/calcScores');

var splitOriginalHand = function() {

    if(score.possibleToSplitPlayer == true) {
        //need to move one card to split array
        var split1 = track.playerArray.shift();
       track.split1Array.push(split1);
        calc.playerScoreF();
    }
};

module.exports = splitOriginalHand;