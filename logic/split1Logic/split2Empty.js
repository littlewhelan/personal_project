var express = require('express');
var router = express.Router();
var score = require('../split1Logic/scoreVars');

var checkSplits = function () {

    if(score.split2Score.length > 0) {
        score.split1Empty = false;}

};

module.exports = checkSplits;
