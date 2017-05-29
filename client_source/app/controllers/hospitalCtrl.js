AA.controller("hospitalCtrl", function($scope, hospitalService){

$scope.data;

$scope.getInfo = () => {
  hospitalService.getData().then( (response) => {
    console.log(response);
    $scope.data = response;
  })
}

$scope.getInfo();


});
