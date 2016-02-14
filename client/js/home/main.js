angular.module('todoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('home', {
                parent: 'site',
                url: '/',
                data: {
                    authorities: []
                },
                views: {
                    'content@': {
                        templateUrl: '/partials/home/main.html',
                        controller: 'MainController'
                    }
                },
                resolve: {
                    
                }
            });
    });
