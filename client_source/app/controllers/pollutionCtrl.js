AA.controller("pollutionCtrl", function($scope, pollutionService){

  $scope.airPollutionIndex;

  $scope.data;

  $scope.getInfo = () => {
   pollutionService.getData().then( (response) => {
     $scope.airPollutionIndex = response.aqi;
   })
  }

  $scope.getInfo();
});
