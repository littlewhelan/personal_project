var express = require('express');
var router = express.Router();
var score = require('./scoreVars');
var dFin = require('./dealerFinish');
var dBust = require('./dealerBust');
var comp = require('./compareScores');
var track = require('./trackingDeck');
var draw = require('./drawcard');

var checkSplits = function () {

    if(track.split1Array.length > 0) {
        score.split1Active = true;
        score.playerHandActive = false;
        track.split1Array.push(draw());
    } else if(track.split1Array.length == 0) {
        dFin();
        dBust();
        comp();
    }
};

module.exports = checkSplits;

