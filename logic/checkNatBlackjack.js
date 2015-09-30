var vars = require('./vars');

var naturalBlackjack = function () {

    if(vars.dealerScore == 21 && vars.dealerArray.length == 2) {
        vars.allHandsDone = true;
        vars.playerCanHit = false;
        vars.naturalBlackjackDealer =true;
    }

    if(vars.playerScore == 21 && vars.playerArray.length == 2) {
        vars.naturalBlackjackPlayer = true;
        vars.playerCanHit = false;
        vars.allHandsDone = true;
    }

    if(vars.naturalBlackjackPlayer == true && vars.naturalBlackjackDealer == true && vars.dealersFirstCardIsAce == true) {
        vars.playersBank += vars.playerBet;
        vars.playerDone = true;
        vars.allHandsDone = true;
    } else if(vars.naturalBlackjackPlayer ==true){
        vars.playersBank += ((vars.playerBet*3)/2);
        vars.playerDone = true;
        vars.allHandsDone = true;
    } else if (vars.naturalBlackjackDealer == true){
        vars.playersBank -= vars.playerBet;
        vars.playerDone = true;
        vars.allHandsDone = true;
    }

};






module.exports = naturalBlackjack;