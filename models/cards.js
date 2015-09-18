var express = require('express');
var router = express.Router();

var allCards = {

//This is the card constructor set up
    Card: function (name, value, suit) {
        this.name = name;
        this.value = value;
        this.suit = suit;
    },

//this will create an array with 52 objects (the cards)
    deck: function () {
        var cards = [];
        this.names = ['Ace', '2', '3', '4', '5', '6', '7', '8', '9', '10', 'Jack', 'Queen', 'King'];
        this.suits = ['Hearts', 'Diamonds', 'Spades', 'Clubs'];


        for (var s = 0; s < this.suits.length; s++) {
            for (var n = 0; n < this.names.length; n++) {
                cards.push(new Card(this.names[n], n + 1, this.suits[s]));

            }
        }
        return cards;
    },

    //This is the Fisher Yates Function
    shuffleDeck: function (array) {
        var m = array.length, t, i;
        while (m) {
            i = Math.floor(Math.random() * m--);
            t = array[m];
            array[m] = array[i];
            array[i] = t;
        }
            return array
        },

    theDeck: function() {

        shuffleDeck(deck());
    }


    };


module.exports = allCards;


