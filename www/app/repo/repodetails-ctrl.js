(function(){
    var app = angular.module("app.controllers");
    var repodetailsCtrl = function (github, $stateParams ) {
        var vm=this;
        
        vm.message = "Hello Angular";

        var onRepo=function(data){
            vm.repo=data;
        };
        var onError = function (reason) {
            vm.error = "Somthing went wron try after some time.";
        };

        github.gerRepoDetails($stateParams.username,$stateParams.reponame).then(onRepo,onError);
    };

    app.controller('repodetailsCtrl', repodetailsCtrl);
}());