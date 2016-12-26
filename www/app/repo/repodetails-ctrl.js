(function(){
    var app = angular.module("app.controllers");
    var repodetailsCtrl = function (github, $stateParams, $state) {
        var vm=this;
        
        vm.message = "Hello Angular";

        var onRepo=function(data){
            vm.repo=data;
        };
        var onError = function (reason) {
            vm.error = "Somthing went wron try after some time.";
        };

        vm.showProfile=function(userid){
             $state.go('profile', { "userid": userid });
        };
        github.gerRepoDetails($stateParams.username,$stateParams.reponame).then(onRepo,onError);
    };

    app.controller('repodetailsCtrl', repodetailsCtrl);
}());