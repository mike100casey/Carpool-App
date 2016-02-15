angular.module('todoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('allPassengerJourneys', {
                parent: 'site',
                url: '/allPassengerJourneys',
                data: {
                    roles: [],
                    pageTitle: 'allPassengerJourneys.title'
                },
                views: {
                    'content@': {templateUrl: '/partials/allPassengerJourneys/PassengerJourneys.html',controller: 'passengerJourneyController'}
                },
                resolve: {

                }
            });
    });
