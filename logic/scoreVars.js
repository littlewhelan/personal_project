var express = require('express');
var router = express.Router();

var score = {
    dealerScore:'',
    playerScore:'',
    split1Score:'',
    split2Score:'',
    split3Score:'',
    split1Empty:true,
    split2Empty:true,
    split3Empty:true,
    dealerBust:false,
    playerBust:false,
    split1Bust:false,
    split2Bust:false,
    split3Bust:false,
    naturalBlackjackPlayer:false,
    naturalBlackjackDealer:false,
    dealersFirstCardIsAce:false,
};


module.exports= score;