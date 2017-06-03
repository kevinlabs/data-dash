AA.controller("weatherCtrl", function ($scope, weatherService, zipConversionService) {

    console.log('Weather controll activated');

    //Variable Declaration.
    $scope.zipcode;
    $scope.weather;
    $scope.temp;
    $scope.speed;

    $scope.$on('eventFired', function (event, data) {

        //.data is the zipcode. Assigning to local controller variable.
        $scope.zipcode = data.geo_code;

        //Testing.
        console.log("Weather Controller: Zipcode data: ", $scope.zipcode);

        weatherService.getWeather($scope.zipcode).then((response) => {
            console.log('From Weather controll at Angular showing data back from service: ', response);
            $scope.weather = response;
            $scope.temp = (response.main.temp * (9 / 5) - 459.67).toFixed(1) + '°';
            $scope.speed = 'wind: ' + response.wind.speed + ' mph';


            console.log("Weather Controller: weather data: ", $scope.weather);
            console.log("Weather Controller: temp data: ", $scope.temp);
            console.log("Weather Controller: speed data: ", $scope.speed);
        });
    });

});