angular.module('todoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('findPassengers', {
                parent: 'site',
                url: '/findPassengers',
                data: {
                    roles: [],
                    pageTitle: 'findPassengers.title'
                },
                views: {
                    'content@': {templateUrl: '/partials/findPassengers/PassengerRequest.html',controller: 'FindRequestController'}
                },
                resolve: {

                }
            });
    });
