var express = require('express');
var router = express.Router();
var cards = require('./cards');

////this array will produce an abnormal amount of blackjacks
//
//
//var newDeck = [{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10},{name:'Ace',Value:1},{name:'king',Value:10}];
//
//    module.exports = newDeck;






//USE THE CODE BELOW FOR A RANDOM DECK
var newDeck =
 function () {
 return cards.theDeck();
};
module.exports = newDeck;