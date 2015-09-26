var vars =  require('./vars');

var naturalBlackjack = function () {

    if(vars.dealerScore == 21 && vars.dealerArray.length == 2) {
        vars.naturalBlackjackDealer =true;
    }
    if(vars.playerScore == 21 && vars.playerArray.length == 2) {
        vars.naturalBlackjackPlayer = true;
    }

    if(vars.naturalBlackjackPlayer == true && vars.naturalBlackjackDealer == true && vars.dealersFirstCardIsAce == true) {
        vars.playersBank += vars.playerBet;
        vars.playerDone = true;
    } else if(vars.naturalBlackjackPlayer ==true){
        vars.playersBank += ((vars.playerBet*3)/2);
        vars.playerDone = true;
    } else if (vars.dealersFirstCardIsAce == true && vars.naturalBlackjackDealer == true){
        vars.playersBank -= vars.playerBet;
        vars.playerDone = true;
    }

};






module.exports = naturalBlackjack;