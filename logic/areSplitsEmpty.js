var express = require('express');
var router = express.Router();
var track = require('./trackingDeck');
var score = require('./scoreVars');

var splitsEmpty = function () {

    if(track.split1Array.length > 0) {
        score.split1Empty = false;
    }

    if (track.split2Array.length > 0 ) {
        score.split2Empty = false;
    }

    if (track.split2Array.length > 0) {
        score.split3Empty =false;
    }

};

module.exports = splitsEmpty;

