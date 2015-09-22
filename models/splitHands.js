var express = require('express');
var router = express.Router();
var track = require('./cards/trackingDeck');

//if the cards in the hand can be split this is how the new arrays should be initiated
var splitHand = {

    split1: function() {
       return track.playerArray.shift();
    },

    split1Init: function(){
        track.split1Array.push(this.split1());
    },

    split2: function() {
    return track.split1Array.shift();
    },

    split2Init: function() {
        return track.split2Array.push(this.split2());
    },

    split3: function() {
        return track.split2Array.shift();
    },

    split3Init: function() {
        return track.split3Array.push(this.split3());
    }
};


module.exports = splitHand;