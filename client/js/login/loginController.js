angular.module('todoApp')
    .controller('LoginController', function ($scope, $rootScope, $state, registerFactory) {
        $rootScope.loggedIn = false;
        $rootScope.username = '';
        
        $scope.findOne = function($event) {
            $scope.allUsers = [];
            registerFactory.getAllUser().then(function(data) {
                $scope.allUsers = data.data;
                for(var i = 0; i < $scope.allUsers.length; i++){
                    //console.log(JSON.stringify($scope.allUsers[i]._id + " " + $scope.allUsers[i].password));
                    if($scope.allUsers[i]._id == $scope.username && $scope.allUsers[i]._id == $scope.password ){
                        $rootScope.username = $scope.username;
                        //$scope.password = '';
                        $scope.authenticationError = false;
                        $rootScope.loggedIn = true;
                        $state.go('home');
                    }
                    else {
                        $scope.authenticationError = true;
                    }
                }
            });
        };
    });

