angular.module('todoApp')
    .controller('MapController', function ($scope,$log,$rootScope, $scope, journeyFactory) {

        $scope.calcRoute = function () {
            var MyDirectionsDisplay = new google.maps.DirectionsRenderer({'map': map, 'draggable': true});
            var start = angular.element('#source').val();
            var end = angular.element('#destination').val();
            google.maps.event.addListener(MyDirectionsDisplay, 'directions_changed', function (e) {
                var routeLeg = MyDirectionsDisplay.directions.routes[0].legs[0];
                var legSize = MyDirectionsDisplay.directions.routes[0].legs.length;
                var routeLegEnd = MyDirectionsDisplay.directions.routes[0].legs[legSize - 1];

                $scope.journey.sourceLat = routeLeg.start_location.lat();
                $scope.journey.sourceLng = routeLeg.start_location.lng();
                $scope.journey.destinationLat = routeLegEnd.end_location.lat();
                $scope.journey.destinationLng = routeLegEnd.end_location.lng();
            });
            var request = {
                origin: start,
                waypoints: $scope.journey.waypts,
                destination: end,
                travelMode: google.maps.TravelMode.DRIVING
            };

            var MyDirectionsService = new google.maps.DirectionsService();
            MyDirectionsService.route(request, function (response, status) {
                if (status == google.maps.DirectionsStatus.OK) {
                    MyDirectionsDisplay.setDirections(response);
                    var distance = 0;
                    for (var i = 0; i < response.routes[0].legs.length; i++) {
                        distance += response.routes[0].legs[i].distance.value / 1000;
                    }
                    var dist = Math.round(distance * 100) / 100 + " KM";
                    document.getElementById('distanceLabel').innerHTML = "Travel Distance: " + dist;
                }
            });
        };

        $scope.journey = {};
        $scope.journey.source = "";
        $scope.journey.destination = "";

        $scope.display = function () {
            $log.log(JSON.stringify($scope.journey));
        };
        $("#myDate").datepicker({});
        $('#timepicker').timepicker({});

        $scope.todos = [];
        // Save a Todo to the server
        $scope.save = function($event) {
            if ($event.which == 13 && $scope.todoInput) {
                journeyFactory.saveTodo({
                    "source": $scope.todoInput
                }).then(function(data) {
                    $scope.todos.push(data.data);
                });
                $scope.source = '';
            }
        };

    });
