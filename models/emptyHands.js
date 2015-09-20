var express = require('express');
var router = express.Router();
var hands = require('./hands');

var emptyHands =  {

    moveToDiscard: function(element) {
        hands.discardArray.push(element); },

    dealerEmpty: function () {
        hands.dealerArray.forEach(this.moveToDiscard);
        hands.dealerArray=[];
    },

    playerEmpty: function () {
        hands.playerArray.forEach(this.moveToDiscard);
        hands.playerArray = [];
    },

    split1Empty: function (){
        hands.split1Array.forEach(this.moveToDiscard);
        hands.split1Array =[];
    },

    split2Empty: function (){
        hands.split2Array.forEach(this.moveToDiscard);
        hands.split2Array=[];
    },

    split3Empty: function (){
        hands.split3Array.forEach(this.moveToDiscard);
        hands.split3Array=[];
    }
};

module.exports = emptyHands;