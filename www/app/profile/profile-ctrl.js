(function(){
    var app = angular.module("app.controllers");
    var profileCtrl = function (github, $stateParams, dataUtil ) {
        var vm=this;
        
        vm.message = "Hello Angular";

        var onUserComplete = function (data) {
            vm.user = data;
        };

        var onError = function (reason) {
            vm.error = "Somthing went wron try after some time.";
        };

        vm.loginUser = dataUtil.getlogedInUser();
        vm.username=$stateParams.userid;

        if(vm.username==="" ||vm.username===undefined)
        {
            github.getUser(vm.loginUser.username).then(onUserComplete, onError);
        }
        else
        {
            github.getUser(vm.username).then(onUserComplete, onError);
        }

    };

    app.controller('profileCtrl', profileCtrl);
}());