AA.controller("weatherCtrl", function ($scope, weatherService, zipConversionService) {

    console.log('Weather controll activated');

    //Variable Declaration.
    $scope.zipcode;
    $scope.weather;
    $scope.temp;
    $scope.windSpeed;
    $scope.description;
    $scope.showConditions = false;

    $scope.$on('eventFired', function (event, data) {

        //.data is the zipcode. Assigning to local controller variable.
        $scope.zipcode = data.geo_code;

        weatherService.getWeather($scope.zipcode).then((response) => {
            $scope.weather = response;
            $scope.temp = (response.main.temp * (9 / 5) - 459.67).toFixed(1) + '°';
            $scope.windSpeed = 'wind: ' + response.wind.speed + ' mph';
            $scope.description = response.weather[0].description;
            $scope.showConditions = true;
        });
    });

});
