angular.module('todoApp')
    .config(function ($stateProvider) {
        $stateProvider
            .state('passengerMap', {
                parent: 'site',
                url: '/passengerJourney',
                data: {
                    authorities: [],
                    pageTitle: 'passenger Map'
                },
                views: {
                    'content@': {
                        templateUrl: '/partials/addPassengerJourney/map.html',
                        controller: 'MapController'
                    }
                },
                resolve: {

                }
            });
    });
