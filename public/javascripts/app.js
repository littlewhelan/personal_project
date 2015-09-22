var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    //this will make a call to deal the hand for both the house and the player
    $scope.dealBtn = function() {
        $http({
            method: 'GET',
            url: '/deal'
        }).then(function (response) {
            console.log('Place scores here');
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
        console.log('Place scores here');
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
            console.log('Place scores here');
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
            console.log('Place scores here');
            console.log("This is the stay double ajax call");
            $scope.card = response.data
        });
    };
    //This will make a call for the split button
    $scope.splitBtn = function() {
        $http({
            method: 'GET',
            url: '/split'
        }).then(function (response) {
            console.log("You are pn the split route ");
            $scope.card = response.data
        });
    };
    $scope.betBtn = function() {
        $http({
            method: 'GET',
            url: '/bet'
        }).then(function (response) {
            console.log("You are on the bet route ");
            $scope.card = response.data
        });
    };
}]);