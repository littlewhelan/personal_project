var express = require('express');
var router = express.Router();
var cards = require('cards');

//set the route for the double button
router.get('/double', function(req, res, next) {
    res.render('index');

    var deck = new cards.PokerDeck();
// Shuffle the deck
    deck.shuffleAll();
// Draw a card
    var card = deck.draw();
    console.log(card);
});

module.exports = router;