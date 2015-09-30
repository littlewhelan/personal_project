var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    $scope.getInfo = function () {
        $http({
            method: 'GET',
            url: '/activeHands'
        }).then(function (response) {
            $scope.playerHand = response.data.playerArray;
            $scope.dealerHand = response.data.dealerArray;
            $scope.split1Hand = response.data.split1Array;
            $scope.split2Hand = response.data.split2Array;
            $scope.split3Hand = response.data.split3Array;
            $scope.showSplitBtn = response.data.playerCanSplit;
            $scope.showDoubleBtn = response.data.playerCanDouble;
            $scope.dealerScore = response.data.dealerScore;
            $scope.playerScore = response.data.playerScore;
            $scope.split1Score = response.data.split1Score;
            $scope.split2Score = response.data.split2Score;
            $scope.split3Score = response.data.split3Score;
            $scope.playersBank = response.data.playersBank;
            $scope.playerBet = response.data.playerBet;
            $scope.hideHitBtn = response.data.playerCanHit;
            $scope.hideStayBtn = response.data.playerCanHit;
            $scope.split1Active = response.data.split1Active;
            $scope.split2Active = response.data.split2Active;
            $scope.split3Active = response.data.split3Active;
            $scope.allHandsDone = response.data.allHandsDone;
            $scope.player = response.data.playerActive;
            $scope.split1 = response.data.split1Active;
            $scope.split2 = response.data.split2Active;
            $scope.split3 = response.data.split3Active;
            $scope.firstHand = response.data.firstHand;
        });
    };

    //this will make a call to deal the hand for both the house and the player
    $scope.dealBtn = function () {
        $http({
            method: 'GET',
            url: '/deal'
        }).then(function (response) {
        });
        this.getInfo();
    };

    //
    $scope.hitBtn = function () {
        $http({
            method: 'GET',
            url: '/hit'
        }).then(function (response) {
        });
        this.getInfo();
    };

    //this will make a call to complete the dealers hand
    $scope.stayBtn = function () {
        $http({
            method: 'GET',
            url: '/stay'
        }).then(function (response) {
        });
        this.getInfo();
    };

    //this will make a call to get the double function
    $scope.doubleBtn = function () {
        $http({
            method: 'GET',
            url: '/double'
        }).then(function (response) {
        });
        this.getInfo()
    };
}

]);

