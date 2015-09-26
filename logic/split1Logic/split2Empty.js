var express = require('express');
var router = express.Router();
var score = require('../scoreVars');
var dFin = require('../dealerFinish');
var dBust = require('../dealerBust');
var comp = require('../compareScores');
var track = require('../trackingDeck');
var draw = require('../drawCard');

var checkSplits = function () {

    if(track.split1Array.length > 0) {
        score.split2Active = true;
        score.split1Bust = false;
        track.split3Array.push(draw());
    } else if(track.split2Array.length == 0) {
        dFin();
        dBust();
        comp();
    }
};

module.exports = checkSplits;

