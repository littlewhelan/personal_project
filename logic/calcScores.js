var cards = require('./cards');
var vars = require('./vars');

 var scores = {
     createLoop: function(array){
       var sum = 0;
         array.forEach(function(element){
             sum += element.value;
         });
         return sum;
     },

     dealerScoreF: function() {
         vars.dealerScore = this.createLoop(vars.dealerArray);
         var aceHigh = 0;

             if (vars.dealerArray[0].name == 'Ace') {
                 vars.dealersFirstCardIsAce = true;
             };

         vars.dealerArray.forEach(function(element) {
             if (element.name == 'Ace') {
                 aceHigh = vars.dealerScore + 10;
             }
         });
         if(aceHigh == 21) {
             vars.dealerScore = 21;
         } else if (aceHigh > vars.dealerScore && aceHigh < 21 ) {
             vars.dealerScore = aceHigh;
         }
         return vars.dealerScore;
     },

     playerScoreF: function () {
         vars.playerScore = this.createLoop(vars.playerArray);
             var aceHigh = 0;
             vars.playerArray.forEach(function(element) {
                 if (element.name == 'Ace') {
                     aceHigh = vars.playerScore + 10;
                 }
             });
             if(aceHigh == 21) {
                 vars.playerScore = 21;
             } else if (aceHigh > vars.playerScore && aceHigh < 21 ) {
                 vars.playerScore = aceHigh;
             }
        return vars.playerScore;
     },

     split1ScoreF: function () {
         vars.split1Score = this.createLoop(vars.split1Array);
         var aceHigh = 0;
             vars.split1Array.forEach(function(element) {
                 if (element.name == 'Ace') {
                     aceHigh = vars.split1Score + 10;
                 }
             });
             if(aceHigh == 21) {
                 vars.split1Score = 21;
             } else if (aceHigh > vars.split1Score && aceHigh < 21 ) {
                 vars.split1Score = aceHigh;
             }
         return  vars.split1Score;
     },

     split2ScoreF: function () {
         vars.split2Score = this.createLoop(vars.split2Array);
             var aceHigh= 0;
             vars.split2Array.forEach(function(element) {
                 if (element.name == 'Ace') {
                     aceHigh = vars.split2Score + 10;
                 }
             });
             if(aceHigh == 21) {
                 vars.split2Score = 21;
             } else if (aceHigh > vars.split2Score && aceHigh < 21 ) {
                 vars.split2Score = aceHigh;
             }
         return vars.split2Score;
     },

     split3ScoreF: function () {
         vars.split3Score = this.createLoop(vars.split3Array);
         var aceHigh= 0;
         vars.split3Array.forEach(function(element) {
             if (element.name == 'Ace') {
                 aceHigh = vars.split3Score + 10;
             }
         });
         if(aceHigh == 21) {
             vars.split3Score = 21;
         } else if (aceHigh > vars.split3Score && aceHigh < 21 ) {
             vars.split3Score = aceHigh;
         }
         return vars.split3Score;
     }
 };
module.exports = scores;