var calc = require('../logic/calcScores');
var vars = require('../logic/vars');
var cards = require('../logic/cards');
var canSplit = require('../logic/splitPossible');
var bust = require('../logic/handBust');


var hitSplit1Hand = function() {

    //draw one more card
    vars.split1Array.push(cards.drawCard());
    //check if player can split if they have already split once/ie first card after split
    canSplit(vars.split1Array);
    //check the new score
    calc.split1ScoreF();
    //Check to see if the player bust if true subtract the bet
    bust.split1();
   if(vars.split2Empty==true && vars.split1Bust == true){
        vars.allHandsDone =true;
    }
};

module.exports = hitSplit1Hand;

