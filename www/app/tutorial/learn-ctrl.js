
(function () {

    var app = angular.module("app.controllers");
    var learnCtrl = function ($scope, github) {
        var vm =this;
        vm.message = "Hello Angular";
    };

    app.controller('learnCtrl', homeCtrl);
} ());