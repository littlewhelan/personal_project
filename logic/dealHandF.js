var cards = require('./cards');
var vars = require('./vars');

var deal = function() {
    //making sure players bank is not zero
    if(vars.playersBank == 0) {
        vars.playersBank = 1000
    };
    // makes sure there are cards in the deck or shuffles up a new deck
    if(vars.startDeckArray.length <= 12) {
        vars.startDeckArray = cards.theDeck();
        vars.discardArray =[];
    };
    //deal two cards to the player and the dealer 
    vars.playerArray.push(cards.drawCard());
    vars.dealerArray.push(cards.drawCard());
    vars.playerArray.push(cards.drawCard());
    vars.dealerArray.push(cards.drawCard());
};

module.exports = deal;