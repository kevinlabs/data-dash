AA.controller("homeValueCtrl", function($scope, homeValueService){

$scope.data;

$scope.getInfo = () => {
  homeValueService.getData().then( (response) => {
   console.log(response)
    $scope.data = response;
 })
}

$scope.getInfo();



//end of controller
});
