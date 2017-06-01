AA.controller("hospitalCtrl", function($scope, hospitalService, zipConversionService){

  $scope.city;


  $scope.$on('eventFired', function (event, data) {
    $scope.city = zipConversionService.city

    console.log("this is hospital controller", $scope.city);

    var city = $scope.city

    var splitCity = city.split(" ").join("+");
    console.log("hey this is splitCity",splitCity);

    $scope.getInfo();
  });




$scope.getInfo = (city) => {
  hospitalService.getData().then( (response) => {
    console.log(response);
    $scope.data = response;
  })
}



});
