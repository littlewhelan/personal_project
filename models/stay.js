var express = require('express');
var router = express.Router();
var cards = require('./cards');
var dHand = require('./finishDealerHand');

var stayBtn = function() {

    //this will cause the dealers hand to be completed
    dHand();

    // this will check to see who wins the hand



    //also need to complete the bet payout






};




module.exports = stayBtn;