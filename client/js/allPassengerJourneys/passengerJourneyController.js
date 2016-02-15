angular.module('todoApp')
    .controller('passengerJourneyController', function ($scope,journeyFactory) {

        //$scope.passengerJourneys = [];
        // get all journeys on Load
        journeyFactory.getJourney().then(function(data) {
            $scope.passengerJourneys = data.data;
        });

    });

