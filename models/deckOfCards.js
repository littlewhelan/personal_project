var express = require('express');
var router = express.Router();

//This is the card object set up
function card(name,value,suit) {
    this.name = name;
    this.value = value;
    this.suit = suit;
}

//this will create an array with 52 objects (the cards)
function deck() {
    var cards = [];
    this.names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];


    for (var s = 0; s < this.suits.length; s++) {
        for (var n = 0; n < this.names.length; n++) {
            cards.push(new card(this.names[n],n+1,this.suits[s]));
        }
    }
    return cards;
}
    //This is the Fisher Yates Function
    function shuffleCards(cards) {
        var m = cards.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = cards[m];
            cards[m] = cards[i];
            cards[i] = t;
        }

        return cards;
    }
shuffleCards(deck());



module.export = deckOfCards;


