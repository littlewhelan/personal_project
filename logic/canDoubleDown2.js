var vars = require('./vars');

var doubleDown = {

    player: function () {
        var sum = vars.playerScore;
        if (sum == 9 && vars.playerArray.length == 2 && vars.naturalBlackjackDealer == false) {
            vars.playerCanDouble = true;
        } else if (sum == 10 && vars.playerArray.length == 2 && vars.naturalBlackjackDealer == false) {
            vars.playerCanDouble = true;
        } else if (sum == 11 && vars.playerArray.length == 2 && vars.naturalBlackjackDealer == false) {
            vars.playerCanDouble = true;
        }
    },
};


module.exports = doubleDown;

