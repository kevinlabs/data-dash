AA.controller("crimeCtrl", function($scope, crimeService){

$scope.assault;
$scope.burglary;
$scope.larceny;
$scope.murder;
$scope.motorVehicleTheft;
$scope.personal;
$scope.property;
$scope.rape;
$scope.robbery;

$scope.getInfo = () => {
  crimeService.getData({city: $scope.city, zip: $scope.zip}).then( (response) => {
    console.log(response);
    $scope.assault = response.crmcyasst;
    $scope.burglary = response.crmcyburg;
    $scope.larceny = response.crmcylarc;
    $scope.murder = response.crmcymurd;
    $scope.motorVehicleTheft = response.crmcymveh;
    $scope.personal = response.crmcyperc;
    $scope.property = response.crmcyproc;
    $scope.rape = response.crmcyrape;
    $scope.robbery = response.crmcyrobb;
  })
}

$scope.getInfo();



//end of controller
});
