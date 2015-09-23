var express = require('express');
var router = express.Router();

var score = {
    dealerScore:'',
    playerScore:'',
    split1Score:'',
    split2Score:'',
    split3Score:'',
    playerBust:false,
    naturalBlackjackPlayer:false,
    naturalBlackjackDealer:false,
    dealersFirstCardIsAce:false,
};


module.exports= score;