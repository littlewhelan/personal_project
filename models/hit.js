var vars = require('../logic/vars');
var canSplit = require('../logic/splitPossible');
var cards = require('../logic/cards');
var calc = require('../logic/calcScores');
var bust = require('../logic/handBust');


var hitOriginalHand = function() {

    //draw one more card
    vars.playerArray.push(cards.drawCard());
    //check if player can split if they have already split once/ie first card after split
    canSplit.player(vars.playerArray);
    //check the new score
    calc.playerScoreF();
    //Check to see if the player bust if true subtract the bet
    bust.player();
    if(vars.split1Empty.length ==0 && vars.playerBust == true){
        vars.allHandsDone =true;
    }
};

module.exports = hitOriginalHand;