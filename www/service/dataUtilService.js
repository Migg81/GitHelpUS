(function(){

    var dataUtil=function(){
        var loginUser = this;

        var setloginUser=function(username){           
           loginUser.username=username;
        };

        var getlogedInUser=function(){
           return loginUser;
        };

          var getUser=function(username){
            return loginUser;
        };


        return {         
            setloginUser:setloginUser,
             getlogedInUser:getlogedInUser,
        };
    };

    var module=angular.module("app.services");
    module.factory("dataUtil",dataUtil);
}());