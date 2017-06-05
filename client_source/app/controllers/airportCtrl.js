AA.controller("airportCtrl", function($scope, zipConversionService){

  $scope.$on('eventFired', function (event, data) {
    console.log(data);
      $scope.airport = data.airport; // AIRPORT
      $scope.airportDist = data.airportdist; // AIRPORTDIST
      $scope.assignData();
  });

  $scope.assignData = function() {
    $scope.airport = data.airport;
    $scope.airportDist = data.airportdist;
  }

//end of controller
});
