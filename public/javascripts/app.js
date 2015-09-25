var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    //this will make a call to deal the hand for both the house and the player
    $scope.dealBtn = function() {
        $http({
            method: 'GET',
            url: '/deal'
        }).then(function (response) {
            console.log("This is the deal button ajax call");
            $scope.card = response.data
        });
    };

    $scope.hitBtn = function () {

        $http({
            method: 'GET',
            url: '/activeHands'
        }).then(function (response) {
            console.log("Checking what hand is active ");
            $scope.player = response.data.playerHandActive;
            $scope.split1 = response.data.split1Active;
            $scope.split2 = response.data.split2Active;
            $scope.split3= response.data.split3Active;

            if ($scope.player == true) {
                        $http({
                            method: 'GET',
                            url: '/hit'
                        }).then(function (response) {
                            console.log('hit Player is active Route');
                            $scope.card = response.data
                        });
            } else if ($scope.split1 == true){

                $http({
                    method: 'GET',
                    url: '/hit'
                }).then(function (response) {
                    console.log('hit split1 is active Route');
                    $scope.card = response.data
                });


            } else if ($scope.split2 == true){

                $http({
                    method: 'GET',
                    url: '/hit'
                }).then(function (response) {
                    console.log('hit split2 is active Route');
                    $scope.card = response.data
                });



            } else if($scope.split3 == true){  $http({
                method: 'GET',
                url: '/hit'
            }).then(function (response) {
                console.log('hit split3 is active Route');
                $scope.card = response.data
            });
            }
        });
    };

    //------------------------------
    //this will make a call to complete the dealers hand
    $scope.stayBtn = function() {
        $http({
            method: 'GET',
            url: '/stay'
        }).then(function (response) {
            console.log("This is the stay button ajax call");
            $scope.card = response.data
        });
    };

    //--------------------------------


    //--------------------------------
    //this will make a call to get the double function
    $scope.doubleBtn = function() {
        $http({
            method: 'GET',
            url: '/double'
        }).then(function (response) {
            console.log("This is the stay double ajax call");
            $scope.card = response.data
        });
    };


    //--------------------------------

    //--------------------------------
    //This will make a call for the split button
    $scope.splitBtn = function() {
        $http({
            method: 'GET',
            url: '/split'
        }).then(function (response) {
            console.log("You are on the btn call route ");
            $scope.card = response.data
        });
    };

    //--------------------------------
    $scope.betBtn = function() {
        $http({
            method: 'GET',
            url: '/bet'
        }).then(function (response) {
            console.log("You are on the bet btn call route ");
            $scope.card = response.data
        });
    };

    //--------------------------------












}]);