var express = require('express');
var router = express.Router();

var score = {
    dealerScore:'',
    playerScore:'',
    split1Score:'',
    split2Score:'',
    split3Score:'',
    playerBust:false,
    naturalBlackjack:false,
};

module.exports= score;