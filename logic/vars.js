var score = {
    //what hand is currently active
    playerActive:true,
    split1Active:false,
    split2Active:false,
    split3Active:false,
    //are the splits empty
    split1Empty:true,
    split2Empty:true,
    split3Empty:true,
    //is the hand complete
    playerDone:false,
    split1Done:false,
    split2Done:false,
    split3Done:false,
    //what is the score of the hand
    dealerScore:'',
    playerScore:'',
    split1Score:'',
    split2Score:'',
    split3Score:'',
    //is it possible to split the hand
    playerCanSplit:false,
    split1CanSplit:false,
    split2CanSplit:false,
    //did the hand bust
    dealerBust:false,
    playerBust:false,
    split1Bust:false,
    split2Bust:false,
    split3Bust:false,
    //was the hand a natural blackjack
    naturalBlackjackPlayer:false,
    naturalBlackjackDealer:false,
    //is the dealers first card an ace
    dealersFirstCardIsAce:false,
    //tracking the deck of cards
    startDeckArray:[],
    dealerArray: [],
    playerArray: [],
    discardArray: [],
    split1Array: [],
    split2Array: [],
    split3Array: [],
    //bet that the player makes and the total amount the player has to bet with
    playersBank: 1000,
    playerBet: 4, //||or the input Value some set value from the index page
    //checking if it is possible to double
    playerCanDouble:false,
    split1CanDouble:false,
    split2CanDouble:false,
    split3CanDouble:false,
    //the player can still hit the hand
    playerCanHit:true,
    split1CanHit:true,
    split2CanHit:true,
    split3CanHit:true,
    //need way to show that all hands are complete
    allHandsDone:false

};


module.exports= score;