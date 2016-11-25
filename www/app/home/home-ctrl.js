
(function () {

    var app = angular.module("app.controllers");
    var homeCtrl = function ($scope, github) {
        var vm =this;
        vm.message = "Hello Angular";

        var onUserComplete = function (data) {
            vm.user = data;
           github.getRepos(vm.user).then(fetchRepoInfo, onError);
        };

        var onError = function (reason) {
            vm.error = "Somthing went wron try after some time.";
        };

        var fetchRepoInfo=function(data) {
            vm.repos=data;
        };

        vm.search=function(){
            //vm.username=vm.username;
            if(vm.username==="" ||vm.username===undefined)
            {
                github.getUser("migg81").then(onUserComplete, onError);
            }
            else
            {
                github.getUser(vm.username).then(onUserComplete, onError);
            }
        };        
    };

    app.controller('homeCtrl', homeCtrl);
} ());