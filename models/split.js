var express = require('express');
var router = express.Router();
var score = require('../logic/scoreVars');
var track = require ('../logic/trackingDeck');
var calc = require('../logic/calcScores');


var splitOriginalHand = function() {
    //need to move one card to split array it also needs to move to the first empty array
    if(score.possibleToSplitPlayer == true && score.split1Empty == true ) {
        track.split1Array.push(track.playerArray.shift());
        calc.playerScoreF();
        score.possibleToSplitPlayer = false;
    //} else if(score.possibleToSplitPlayer == true && track.split2Array.length < 1){
    //    track.split2Array.push(track.playerArray.shift());
    //    calc.playerScoreF();
    //    score.possibleToSplitPlayer = false;
    //} else if (score.possibleToSplitPlayer == true && track.split3Array.length < 1) {
    //    track.split3Array.push(track.playerArray.shift());
    //    calc.playerScoreF();
    //    score.possibleToSplitPlayer = false;

    }
};

module.exports = splitOriginalHand;