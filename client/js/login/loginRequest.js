angular.module('todoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('login', {
                parent: 'site',
                url: '/login',
                data: {
                    roles: [],
                    pageTitle: 'login.title'
                },
                views: {
                    'content@': {templateUrl: '/partials/login/login.html',controller: 'LoginController'}
                },
                resolve: {

                }
            });
    });
