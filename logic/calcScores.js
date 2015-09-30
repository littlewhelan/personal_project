var cards = require('./cards');
var vars = require('./vars');

 var scores = {
     createLoop: function (array) {
         var sum = 0;
         array.forEach(function (element) {
             sum += element.value;
         });
         return sum;
     },

     dealerScoreF: function () {
         vars.dealerScore = this.createLoop(vars.dealerArray);
         var aceHigh = 0;

         if (vars.dealerArray[0].name == 'Ace') {
             vars.dealersFirstCardIsAce = true;
         }
         ;

         vars.dealerArray.forEach(function (element) {
             if (element.name == 'Ace') {
                 aceHigh = vars.dealerScore + 10;
             }
         });
         if (aceHigh == 21) {
             vars.dealerScore = 21;
         } else if (aceHigh > vars.dealerScore && aceHigh < 21) {
             vars.dealerScore = aceHigh;
         }
         return vars.dealerScore;
     },

     playerScoreF: function () {
         vars.playerScore = this.createLoop(vars.playerArray);
         var aceHigh = 0;
         vars.playerArray.forEach(function (element) {
             if (element.name == 'Ace') {
                 aceHigh = vars.playerScore + 10;
             }
         });
         if (aceHigh == 21) {
             vars.playerScore = 21;
         } else if (aceHigh > vars.playerScore && aceHigh < 21) {
             vars.playerScore = aceHigh;
         }
         return vars.playerScore;
     }

 };
module.exports = scores;