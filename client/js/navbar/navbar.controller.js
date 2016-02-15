'use strict';

todoApp.controller('NavbarController', function($rootScope, $scope) {
    $rootScope.loggedIn = false;
    $scope.name = $rootScope.username;
});

