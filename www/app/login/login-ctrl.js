
(function () {

    var app = angular.module("app.controllers");
    var loginCtrl = function ($scope, $http,dataUtil,$state) {
        var vm =this;
        vm.message = "Authenticating the user";

        var onUserComplete = function (data) {
            vm.user = data;
            dataUtil.setloginUser(vm.username);
           //github.getRepos(vm.user).then(fetchRepoInfo, onError);
           vm.message="User Authenticated successfully.";
            $state.go('gitgub.home');
        };

        var onError = function (reason) {
            vm.error = "Somthing went wron try after some time.";
        };

        vm.authenticate=function(){

            var url = "https://api.github.com/user"
 
            var credentials = btoa(vm.username + ':' + vm.pswd);
            var authorization = {'Authorization': 'Basic ' + credentials};
            var header = { headers: authorization }
            
            return $http.get(url, header)
                .then( onUserComplete,onError);
        };        
    };
    app.controller('loginCtrl', loginCtrl);
} ());