AA.controller("hospitalCtrl", function($scope, hospitalService, zipConversionService){

  $scope.city;

  $scope.$on('eventFired', function (event, data) {
    $scope.city = zipConversionService.city

    var city = $scope.city
    var splitCity = city.split(" ").join("+");

    $scope.getInfo(splitCity);
  });

  $scope.getInfo = (city) => {
    hospitalService.getData(city).then( (response) => {
      $scope.data = response;
    });
  };

});
