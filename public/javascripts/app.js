var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    //this will make a call to deal the hand for both the house and the player
    $scope.dealBtn = function() {
        $http({
            method: 'GET',
            url: '/deal'
        }).then(function (response) {
            console.log('Place data here');
            console.log("This is the deal button ajax call");
            $scope.card = response.data
        });
    };
    //this will make a call to get a card for the hit function
    $scope.hitBtn = function() {
        $http({
        method: 'GET',
        url: '/hit'
    }).then(function (response) {
        console.log('Place data here');
        console.log("This is the hit button ajax call");
        $scope.card = response.data
    });
};
    //this will make a call to complete the dealers hand
    $scope.stayBtn = function() {
        $http({
            method: 'GET',
            url: '/stay'
        }).then(function (response) {
            console.log('Place data here');
            console.log("This is the stay button ajax call");
            $scope.card = response.data
        });
    };
    //this will make a call to get the double function
    $scope.doubleBtn = function() {
        $http({
            method: 'GET',
            url: '/double'
        }).then(function (response) {
            console.log('Place data here');
            console.log("This is the stay double ajax call");
            $scope.card = response.data
        });
    };

    $scope.rulesBtn = function() {
        $http({
            method: 'GET',
            url: '/rules'
        }).then(function (response) {
            console.log("You are on the rules page");
            $scope.card = response.data
        });
    };
}]);