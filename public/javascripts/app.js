var app = angular.module('blackJack', []);

app.controller('gameCtrl',['$scope','$http', function($scope, $http) {

    $scope.dealBtn = function() {
        alert('This is the delete button')
    };


    $scope.hitBtn = function() {
        alert('This is the hit button')
    };

    $scope.stayBtn = function() {
        alert('This is the stay button')
    };

}]);