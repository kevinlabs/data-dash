AA.controller("pollutionCtrl", function($scope, pollutionService){

$scope.data;

$scope.getInfo = () => {
 pollutionService.getData().then( (response) => {
   console.log(response);
   $scope.data = response
 })
}

$scope.getInfo();

//end of controller
})
