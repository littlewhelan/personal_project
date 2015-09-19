var express = require('express');
var router = express.Router();
var hands = require('./hands');

var emptyHands =  {
    //must move all cards in play to the discard pile
    dealerEmpty: function (){
        hands.discardArray.push(hands.dealerArray); }, //I think this will push an array not the objects.....will need some sort of for each loop

    playerEmpty: function () {
        hands.discardArray.push(hands.playerArray); },

    split1Empty: function (){
        hands.discardArray.push(hands.split1Array);
    },

    split2Empty: function (){
        hands.discardArray.push(hands.split2Array);
    },

    split3Empty: function (){
        hands.discardArray.push(hands.split3Array);
    }

};



module.exports = emptyHands;