angular.module('todoApp')
    .controller('RegisterController', function ($scope, registerFactory, makeFactory) {

        $scope.users = [];
        // Save a Todo to the server
        $scope.sendForm = function ($event) {
            if ($scope.username && $scope.password) {
                registerFactory.saveUser({
                    "_id":$scope.username,
                    "username": $scope.username,
                    "password": $scope.password

                }).then(function (data) {
                    $scope.users.push(data.data);
                    $scope.success = 'OK';

                });
            }
        };

        $scope.findOne = function($event) {
            $scope.allUsers = [];
            registerFactory.getAllUser().then(function(data) {
                $scope.allUsers = data.data;
                for(var i = 0; i < $scope.allUsers.length; i++){
                    //console.log(JSON.stringify($scope.allUsers[i]._id ));
                    if($scope.allUsers[i]._id == $scope.username){
                        $scope.username = '';
                        $scope.authenticationError = true;
                    }
                    else {
                        $scope.authenticationError = false;
                    }
                }
            });
        };

        $scope.findMakes = function() {
            $scope.makes = [];
            makeFactory.getAllmakes().then(function(data) {
                $scope.makes = data.data;
               // for(var i = 0; i < $scope.makes.length; i++){
                    //console.log(JSON.stringify($scope.makes[i]._id ));
                    //if($scope.allUsers[i]._id == $scope.username){
                    //    $scope.username = '';
                    //    $scope.authenticationError = true;
                    //}
                    //else {
                    //    $scope.authenticationError = false;
                    //}
                //}
            });
        };
        $scope.findMakes();

        $scope.userType = "driver";
        $scope.isDriver = true;
        $scope.years = [];
        $scope.currentYear = (new Date).getFullYear();
        $scope.minYear = 1960;

        for(var i = $scope.currentYear; i >= $scope.minYear; i--){
            $scope.years.push(i);
        }

        $('#radioBtn a').on('click', function(){
            var sel = $(this).data('title');
            var tog = $(this).data('toggle');
            $('#'+tog).prop('value', sel);

            $('a[data-toggle="'+tog+'"]').not('[data-title="'+sel+'"]').removeClass('active').addClass('notActive');
            $('a[data-toggle="'+tog+'"][data-title="'+sel+'"]').removeClass('notActive').addClass('active');
        });

    });

