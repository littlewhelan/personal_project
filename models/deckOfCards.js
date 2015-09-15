var express = require('express');
var router = express.Router();

function card(name,value,suit) {
    this.name = name;
    this.value = value;
    this.suit = suit;
}


function deck() {
    var cards = [];
    this.names = ['A', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'J', 'Q', 'K'];
    this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];


    for (var s = 0; s < this.suits.length; s++) {
        for (var n = 0; n < this.names.length; n++) {
            cards.push(new card(this.names[n], this.suits[s], n + 1));


        }

    }
    return cards;
}

deck();



module.export = deckOfCards;