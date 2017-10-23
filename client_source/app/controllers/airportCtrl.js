AA.controller("airportCtrl", function($scope, zipConversionService){

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
      $scope.airport = data.airport; // AIRPORT
      $scope.airportDist = data.airportdist; // AIRPORTDIST
  });
});
