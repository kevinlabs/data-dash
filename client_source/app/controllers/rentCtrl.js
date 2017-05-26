AA.controller("rentCtrl", function($scope, rentService){

$scope.data;


$scope.getInfo = () => {
  rentService.getData().then( (response) => {
    console.log(response);
      $scope.data = response;
  })
}

$scope.getInfo();

//end of controller
});
