var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var dFin = require('./dealerFinish');
var dBust = require('./dealerBust');
var comp = require('./compareScores');

var checkSplits = function () {

    if(score.split1Score.length > 0) {
        score.split1Active = true;
        score.playerHandActive = false;
    } else if(score.split1Score.length == 0) {
        dFin();
        dBust();
        comp();
    }
};

module.exports = checkSplits;

