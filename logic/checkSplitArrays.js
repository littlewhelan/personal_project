var express = require('express');
var router = express.Router();
var score = require('./scoreVars');

var checkSplits = function () {
    if(score.split1Score.length > 0) {
        score.split1Empty = false;
    } else if(score.split2Empty.length > 0) {
        score.split2Empty = false;
    } else if(score.split3Empty.length > 0) {
        score.split3Empty = false;
    }
};

module.exports = checkSplits;

