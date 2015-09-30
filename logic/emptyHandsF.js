var vars = require('./vars');

var emptyHands =  {

    moveToDiscard: function(element) {
        vars.discardArray.push(element); },

    dealerEmpty: function () {
        vars.dealerArray.forEach(this.moveToDiscard);
        vars.dealerArray=[];
    },

    playerEmpty: function () {
        vars.playerArray.forEach(this.moveToDiscard);
        vars.playerArray = [];
    }

};

module.exports = emptyHands;