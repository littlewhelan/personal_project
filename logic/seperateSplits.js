var vars = require ('../logic/vars');
var calc = require('../logic/calcScores');

var splitHands = {

    playerHand:function() {
        //need to move one card to split array it also needs to move to the first empty array
        if (vars.playerCanSplit == true && vars.split1Array.length == 0) {
            vars.split1Array.push(vars.playerArray.shift());
            calc.playerScoreF();
            vars.playerCanSplit = false;
        } else if (vars.playerCanSplit == true && vars.split2Array.length == 0) {
            vars.split2Array.push(vars.playerArray.shift());
            calc.playerScoreF();
            vars.playerCanSplit = false;
        } else if (vars.playerCanSplit == true && vars.split3Array.length == 0) {
            vars.split3Array.push(vars.playerArray.shift());
            calc.playerScoreF();
            vars.playerCanSplit = false;
        }
    },

    split1Hand:function() {
        //need to move one card to split array it also needs to move to the first empty array
        if (vars.split1CanSplit == true && vars.split2Array.length == 0) {
            vars.split2Array.push(vars.split1Array.shift());
            calc.split1ScoreF();
            vars.split1CanSplit = false;
        } else if (vars.split1CanSplit == true && vars.split3Array.length == 0) {
            vars.split3Array.push(vars.split1Array.shift());
            calc.split1ScoreF();
            vars.split1CanSplit = false;
        }
    },

    split2Hand:function() {
        //need to move one card to split array it also needs to move to the first empty array
        if (vars.split2CanSplit == true && vars.split3Array.length == 0) {
            vars.split3Array.push(vars.split2Array.shift());
            calc.split2ScoreF();
            vars.split2CanSplit = false;
        }

    }
};

module.exports = splitHands;