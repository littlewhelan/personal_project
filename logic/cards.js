var express = require('express');
var router = express.Router();

var cards = {

//This is the card constructor set up
    Card: function (name, suit, value) {
        this.name = name;
        this.suit = suit;
        this.value = (value > 10) ? 10: this.value = value ;
    },

//this will create an array with 52 objects (the cards)
    deck: function () {
        var cards = [];
        this.name = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.suit = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];


        for (var s = 0; s < this.suit.length; s++) {
            for (var n = 0; n < this.name.length; n++) {
                cards.push(new this.Card(this.name[n], this.suit[s], n+1));
            }
        }
        return cards;
    },

    //This is the Fisher Yates Function
    shuffleDeck: function (cards) {
        var m = cards.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = cards[m];
            cards[m] = cards[i];
            cards[i] = t;
        }
            return cards
        },

    theDeck: function() {

      return this.shuffleDeck(this.deck());
    }
    };

module.exports = cards;

