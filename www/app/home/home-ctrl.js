
(function () {

    var app = angular.module("app.controllers");
    var homeController = function ($scope, github,$routeParams) {

        $scope.message = "Hello Angular";

        var onUserComplete = function (data) {
            $scope.user = data;
           github.getRepos($scope.user).then(fetchRepoInfo, onError);
        };

        var onError = function (reason) {
            $scope.error = "Somthing went wron try after some time.";
        };

        var fetchRepoInfo=function(data) {
            $scope.repos=data;
        };
        $scope.username=$routeParams.username;
        github.getUser($scope.username).then(onUserComplete, onError);
    };

    app.controller('homeController', homeController);
} ());