var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    $scope.getInfo = function () {
        $http({
            method: 'GET',
            url: '/activeHands'
        }).then(function (response) {
            $scope.playerHand = response.data.playerArray;
            $scope.dealerHand = response.data.dealerArray;
            $scope.showSplitBtn = response.data.playerCanSplit;
            $scope.showDoubleBtn = response.data.playerCanDouble;
            $scope.dealerScore = response.data.dealerScore;
            $scope.playerScore = response.data.playerScore;
            $scope.playersBank = response.data.playersBank;
            $scope.playerBet = response.data.playerBet;
            $scope.hideHitBtn = response.data.playerCanHit;
            $scope.hideStayBtn = response.data.playerCanHit;
            $scope.allHandsDone = response.data.allHandsDone;

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

