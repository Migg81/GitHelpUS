(function(){
    var app = angular.module("app.controllers");
    var profileCtrl = function (github, $stateParams ) {
        var vm=this;
        
        vm.message = "Hello Angular";

        if(vm.username==="" ||vm.username===undefined)
        {
            ///Need refactor as we need to pass logged in user info
            github.getUser("migg81").then(onUserComplete, onError);
        }
        else
        {
            github.getUser(vm.username).then(onUserComplete, onError);
        }
    };

    app.controller('profileCtrl', profileCtrl);
}());