angular.module('todoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('register', {
                parent: 'site',
                url: '/register',
                data: {
                    roles: [],
                    pageTitle: 'register.title'
                },
                views: {
                    'content@': {templateUrl: '/partials/register/register.html',controller: 'RegisterController'}
                },
                resolve: {

                }
            });
    });
