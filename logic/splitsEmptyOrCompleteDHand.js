var vars = require('./vars');
var dFin = require('./dealerHitTo17');
var comp = require('./compareScores');
var cards = require('./cards');

var checkSplits = {

    split1:function() {
        if (vars.split1Array.length > 0) {
            vars.split1Active = true;
            vars.playerActive = false;
            vars.split1Array.push(cards.drawCard());
        } else if (vars.split1Array.length == 0) {
            dFin();
            comp();
        }
    },
    split2:function() {
        if (vars.split2Array.length > 0) {
            vars.split2Active = true;
            vars.split1Active = false;
            vars.playerActive = false;
            vars.split2Array.push(cards.drawCard());
        } else if (vars.split2Array.length == 0) {
            dFin();
            comp();
        }
    },
    split3:function() {
        if (vars.split3Array.length > 0) {
            vars.split3Active = true;
            vars.playerActive = false;
            vars.split3Array.push(cards.drawCard());
        } else if (vars.split3Array.length == 0) {
            dFin();
            comp();
        }
    },


};

module.exports = checkSplits;

