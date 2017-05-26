AA.controller("crimeCtrl", function($scope, crimeService){

$scope.data;

$scope.getInfo = () => {
  crimeService.getData().then( (response) => {
    console.log(response);
    $scope.data = response;
  })
}

$scope.getInfo(); 



//end of controller
});
