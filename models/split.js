//var vars = require ('../logic/vars');
//var calc = require('../logic/calcScores');
//
//
//var splitOriginalHand = function() {
//    //need to move one card to split array it also needs to move to the first empty array
//    if(vars.playerCanSplit == true && vars.split1Empty == true ) {
//        vars.split1Array.push(vars.playerArray.shift());
//        calc.playerScoreF();
//        vars.playerCanSplit = false;
//    } else if(vars.possibleToSplitPlayer == true && vars.split2Array.length < true){
//        vars.split2Array.push(vars.playerArray.shift());
//        calc.playerScoreF();
//        vars.possibleToSplitPlayer = false;
//    } else if (vars.possibleToSplitPlayer == true && vars.split3Array.length < true) {
//        vars.split3Array.push(vars.playerArray.shift());
//        calc.playerScoreF();
//        vars.possibleToSplitPlayer = false;
//    }
//};
//
//module.exports = splitOriginalHand;