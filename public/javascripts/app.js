var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    $scope.getInfo = function() {
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
            $scope.showDeal = response.data.showDealBtn;
        });

    };

    //this will make a call to deal the hand for both the house and the player
    $scope.dealBtn = function() {
        this.getInfo();
        $http({
            method: 'GET',
            url: '/deal'
        }).then(function (response) {
            console.log("This is the deal button ajax call");
            $scope.card = response.data;

        });
        this.getInfo();
    };

    //
    //$scope.hitBtn = function() {
    //    $http({
    //        method: 'GET',
    //        url: '/hit'
    //    }).then(function (response) {
    //        console.log("This is the hit button ajax call");
    //        $scope.card = response.data;
    //
    //    });
    //    this.getInfo();
    //};

    //------------------------------

    $scope.hitBtn = function () {
        this.getInfo();
            if (this.player == true) {
                        $http({
                            method: 'GET',
                            url: '/hit'
                        }).then(function (response) {
                            console.log('hit Player is active Route');
                            $scope.card = response.data
                        });
               this.getInfo();
            } else if (this.split1 == true){

                $http({
                    method: 'GET',
                    url: '/hitSplit1'
                }).then(function (response) {
                    console.log('hit split1 is active Route');
                    $scope.card = response.data
                });
                this.getInfo()
            } else if (this.split2 == true){
                $http({
                    method: 'GET',
                    url: '/hitSplit2'
                }).then(function (response) {
                    console.log('hit split2 is active Route');
                    $scope.card = response.data
                });
                this.getInfo();
            } else if(this.split3 == true){  $http({
                method: 'GET',
                url: '/hitSplit3'
            }).then(function (response) {
                console.log('hit split3 is active Route');
                $scope.card = response.data
            });
            }
    };

    //------------------------------
    //this will make a call to complete the dealers hand
    //$scope.stayBtn = function() {
    //    $http({
    //        method: 'GET',
    //        url: '/stay'
    //    }).then(function (response) {
    //        console.log("This is the stay button ajax call");
    //        $scope.card = response.data
    //    });
    //    this.getInfo();
    //};

    //--------------------------------
    $scope.stayBtn = function () {
        this.getInfo();
            if (this.player == true) {
                $http({
                    method: 'GET',
                    url: '/stay'
                }).then(function (response) {
                    console.log('stay Player is active Route');
                    $scope.card = response.data
                });
                this.getInfo();
            } else if (this.split1 == true){
                $http({
                    method: 'GET',
                    url: '/staySplit1'
                }).then(function (response) {
                    console.log('stay split1 is active Route');
                    $scope.card = response.data
                });
                this.getInfo();
            } else if (this.split2 == true){
                $http({
                    method: 'GET',
                    url: '/staySplit2'
                }).then(function (response) {
                    console.log('stay split2 is active Route');
                    $scope.card = response.data
                });
                this.getInfo();
            } else if(this.split3 == true){  $http({
                method: 'GET',
                url: '/staySplit3'
            }).then(function (response) {
                console.log('stay split3 is active Route');
                $scope.card = response.data
            });
                this.getInfo();
            }


    };


    //--------------------------------
    //this will make a call to get the double function
    $scope.doubleBtn = function() {
        this.getInfo();
        $http({
            method: 'GET',
            url: '/double'
        }).then(function (response) {
            console.log("This is the stay double ajax call");
            $scope.card = response.data
        });
        this.getInfo()
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
        this.getInfo();
        $http({
            method: 'GET',
            url: '/split'
        }).then(function (response) {
            console.log("You are on the  btn call route ");
        });
        this.getInfo()
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