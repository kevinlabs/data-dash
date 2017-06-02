AA.controller("hospitalCtrl", function($scope, hospitalService, zipConversionService){

  $scope.city;


  $scope.$on('eventFired', function (event, data) {
    $scope.city = zipConversionService.city

    console.log("this is hospital controller", $scope.city);

    var city = $scope.city

    var splitCity = city.split(" ").join("+");
    console.log("hey this is splitCity",splitCity);
    console.log('Show me data type for splitcity: ', typeof(splitCity));

    $scope.getInfo(splitCity);
  });


$scope.getInfo = (city) => {
  hospitalService.getData(city).then( (response) => {
    console.log('Here is the response from Health Service: ', response);
    $scope.data = response;
  });
};



});
