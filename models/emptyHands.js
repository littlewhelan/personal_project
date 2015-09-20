var express = require('express');
var router = express.Router();
var hands = require('./hands');

var emptyHands =  {

    moveToDiscard: function(element) {
        hands.discardArray.push(element); },

    dealerEmpty: function () {
        hands.dealerArray.forEach(this.moveToDiscard) },

    playerEmpty: function () {
        hands.discardArray.push(this.moveToDiscard); },

    split1Empty: function (){
        hands.discardArray.push(this.moveToDiscard); },

    split2Empty: function (){
        hands.discardArray.push(this.moveToDiscard); },

    split3Empty: function (){
        hands.discardArray.push(this.moveToDiscard); }
};

module.exports = emptyHands;