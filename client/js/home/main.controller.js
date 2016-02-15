angular.module('todoApp')
    .controller('MainController', function ($scope, $rootScope) {
        $scope.name = $rootScope.username;
    });
