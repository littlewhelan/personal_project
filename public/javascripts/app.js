var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    $scope.getInfo = function() {
        $http({
            method: 'GET',
            url: '/activeHands'
        }).then(function (response) {
            $scope.playerHand = response.data.playerArray;
            $scope.dealerHand = response.data.dealerArray;
            $scope.showSplitBtn = response.data.playerCanSplit;
            $scope.showDoubleBtn = response.data.playerCanDouble;
        });

    };

    //this will make a call to deal the hand for both the house and the player
    $scope.dealBtn = function() {
        $http({
            method: 'GET',
            url: '/deal'
        }).then(function (response) {
            console.log("This is the deal button ajax call");
            $scope.card = response.data;

        });
        this.getInfo();
    };


    $scope.hitBtn = function() {
        $http({
            method: 'GET',
            url: '/hit'
        }).then(function (response) {
            console.log("This is the hit button ajax call");
            $scope.card = response.data;

        });
        this.getInfo();
    };

    //------------------------------

    //$scope.hitBtn = function () {
    //
    //    $http({
    //        method: 'GET',
    //        url: '/activeHands'
    //    }).then(function (response) {
    //        console.log("Checking what hand is active ");
    //        $scope.player = response.data.playerActive;
    //        $scope.split1 = response.data.split1Active;
    //        $scope.split2 = response.data.split2Active;
    //        $scope.split3 = response.data.split3Active;
    //
    //        if (player == true) {
    //                    $http({
    //                        method: 'GET',
    //                        url: '/hit'
    //                    }).then(function (response) {
    //                        console.log('hit Player is active Route');
    //                        $scope.card = response.data
    //                    });
    //        } else if ($scope.split1 == true){
    //
    //            $http({
    //                method: 'GET',
    //                url: '/hitSplit1'
    //            }).then(function (response) {
    //                console.log('hit split1 is active Route');
    //                $scope.card = response.data
    //            });
    //        } else if ($scope.split2 == true){
    //            $http({
    //                method: 'GET',
    //                url: '/hit'//Split3
    //            }).then(function (response) {
    //                console.log('hit split2 is active Route');
    //                $scope.card = response.data
    //            });
    //        } else if($scope.split3 == true){  $http({
    //            method: 'GET',
    //            url: '/hit'//Split3
    //        }).then(function (response) {
    //            console.log('hit split3 is active Route');
    //            $scope.card = response.data
    //        });
    //        }
    //    });
    //};

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
        this.getInfo();
    };

    //--------------------------------
    //$scope.stayBtn = function () {
    //    $http({
    //        method: 'GET',
    //        url: '/activeHands'
    //    }).then(function (response) {
    //        console.log("Checking what hand is active ");
    //        $scope.player = response.data.playerActive;
    //        $scope.split1 = response.data.split1Active;
    //        $scope.split2 = response.data.split2Active;
    //        $scope.split3= response.data.split3Active;
    //
    //        if ($scope.player == true) {
    //            $http({
    //                method: 'GET',
    //                url: '/stay'
    //            }).then(function (response) {
    //                console.log('hit Player is active Route');
    //                $scope.card = response.data
    //            });
    //        } else if ($scope.split1 == true){
    //            $http({
    //                method: 'GET',
    //                url: '/staySplit1'
    //            }).then(function (response) {
    //                console.log('hit split1 is active Route');
    //                $scope.card = response.data
    //            });
    //        } else if ($scope.split2 == true){
    //            $http({
    //                method: 'GET',
    //                url: '/staySplit2'
    //            }).then(function (response) {
    //                console.log('hit split2 is active Route');
    //                $scope.card = response.data
    //            });
    //        } else if($scope.split3 == true){  $http({
    //            method: 'GET',
    //            url: '/staySplit3'
    //        }).then(function (response) {
    //            console.log('hit split3 is active Route');
    //            $scope.card = response.data
    //        });
    //        }
    //    });
    //};


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

    //$scope.doubleBtn = function () {
    //
    //    $http({
    //        method: 'GET',
    //        url: '/activeHands'
    //    }).then(function (response) {
    //        console.log("Checking what hand is active ");
    //        $scope.player = response.data.playerActive;
    //        $scope.split1 = response.data.split1Active;
    //        $scope.split2 = response.data.split2Active;
    //        $scope.split3= response.data.split3Active;
    //
    //        if ($scope.player == true) {
    //            $http({
    //                method: 'GET',
    //                url: '/double'
    //            }).then(function (response) {
    //                console.log('double Player is active Route');
    //                $scope.card = response.data
    //            });
    //        } else if ($scope.split1 == true){
    //
    //            $http({
    //                method: 'GET',
    //                url: '/doubleSplit1'
    //            }).then(function (response) {
    //                console.log('double split1 is active Route');
    //                $scope.card = response.data
    //            });
    //
    //
    //        } else if ($scope.split2 == true){
    //
    //            $http({
    //                method: 'GET',
    //                url: '/doubleSplit2'
    //            }).then(function (response) {
    //                console.log('double split2 is active Route');
    //                $scope.card = response.data
    //            });
    //
    //
    //
    //        } else if($scope.split3 == true){  $http({
    //            method: 'GET',
    //            url: '/doubleSplit3'
    //        }).then(function (response) {
    //            console.log('double split3 is active Route');
    //            $scope.card = response.data
    //        });
    //        }
    //    });
    //};



    //--------------------------------
    //This will make a call for the split button
    $scope.splitBtn = function() {
        $http({
            method: 'GET',
            url: '/split'
        }).then(function (response) {
            console.log("You are on the  btn call route ");
        });

    };
//--------------------------------

    //$scope.splitBtn = function () {
    //
    //    $http({
    //        method: 'GET',
    //        url: '/activeHands'
    //    }).then(function (response) {
    //        console.log("Checking what hand is active ");
    //        $scope.player = response.data.playerActive;
    //        $scope.split1 = response.data.split1Active;
    //        $scope.split2 = response.data.split2Active;
    //        $scope.split3= response.data.split3Active;
    //
    //        if ($scope.player == true) {
    //            $http({
    //                method: 'GET',
    //                url: '/split'
    //            }).then(function (response) {
    //                console.log('split Player is active Route');
    //                $scope.card = response.data
    //            });
    //        } else if ($scope.split1 == true){
    //
    //            $http({
    //                method: 'GET',
    //                url: '/splitSplit1'
    //            }).then(function (response) {
    //                console.log('split split1 is active Route');
    //                $scope.card = response.data
    //            });
    //
    //
    //        } else if ($scope.split2 == true){
    //
    //            $http({
    //                method: 'GET',
    //                url: '/splitSplit2'
    //            }).then(function (response) {
    //                console.log('split split2 is active Route');
    //                $scope.card = response.data
    //            });
    //
    //
    //
    //        }
    //    });
    //};


}]);